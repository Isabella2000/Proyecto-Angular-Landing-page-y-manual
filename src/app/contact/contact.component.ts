import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  //* ----FORMULARIO PLANTILLA----
  public usuario: any = {
    nombre: '',
    email: '',
  };
  enviarPlantilla() {
    console.log(this.usuario);
  }

  //* ----FORMULARIO REACTIVO----
  formularioContacto: FormGroup;
  // usuarioActivo: string = 'Pedro'; si fuera solo uno
  usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Perez',
    documento: 237849,
  };
  tipo_documento: string = 'Cedula';

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      documento: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
    this.formularioContacto.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.formularioContacto
      .get('tipo_documento')
      ?.valueChanges.subscribe((value) => {
        this.tipo_documento = value;
      });

    this.formularioContacto.get('nombre')?.setValue('Juan');
    this.formularioContacto.get('nombre')?.disable();

    // this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo);  si fuera solo uno
    this.formularioContacto.get('apellido')?.clearValidators();
    this.formularioContacto.get('apellido')?.updateValueAndValidity();

    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      documento: this.usuarioActivo.documento,
    });
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('documento')?.disable();
  }

  ngOnDestroy(): void {
    console.log("Se destruyo el componente")
  }

  hasErrors(controlName: string, errorType: string) {
    // console.log(this.formularioContacto.get(controlName)?.hasError(errorType));
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }

  enviarReactivo() {
    console.log(this.formularioContacto);
  }
}
