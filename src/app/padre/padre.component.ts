import { Component, OnInit } from '@angular/core';
import { ServcioFamiliarService } from '../servcio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  nombre?: string;
  fecha?: Date = new Date();
  dolar: number = 4500;
  constructor(private _servicioFamiliar: ServcioFamiliarService) {}
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Juan');
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }

  saludar() {
    this._servicioFamiliar.saludar(
      this._servicioFamiliar.getHermanoMenor() || ''
    );
  }

  preguntar() {
    console.log(
      this._servicioFamiliar.preguntaPorHijo(
        this._servicioFamiliar.getHermanoMenor() || ''
      )
    );
  }

  valorContador: number = 0;
  mensajePadre: string = 'Hi world!!!';
  mensajeRecibido: string = '';
  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  increment() {
    this.valorContador++;
  }
  decrement() {
    this.valorContador--;
  }
}
