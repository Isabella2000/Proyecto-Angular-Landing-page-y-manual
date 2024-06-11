import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'documento-input',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css'],
})
export class DocumentoComponent implements OnChanges {
  @Input() tipo_documento: string = '';
  formularioDocumento: FormGroup;
  variable_tipo_documento: string = 'Documento';
  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      documento: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //* valor indexado
    this.variable_tipo_documento = !changes?.['documento'].firstChange
      ? changes?.['documento'].currentValue
      : 'Documento';

    console.log(changes?.['documento'].currentValue);
  }

  hasErrors(controlName: string, errorType: string) {
    // console.log(this.formularioDocumento.get(controlName)?.hasError(errorType));
    return (
      this.formularioDocumento.get(controlName)?.hasError(errorType) &&
      this.formularioDocumento.get(controlName)?.touched
    );
  }
}
