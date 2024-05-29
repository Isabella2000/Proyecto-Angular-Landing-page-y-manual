import { Component, OnInit, inject } from '@angular/core';
import { ServcioFamiliarService } from '../servcio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css'],
})
export class HermanoComponent implements OnInit {
  nombre?: string;
  
  //? esa es otra manera y tambien sirve: Inyeccion de dependencias
  //* private _servicioFamiliar= inject(ServcioFamiliarService)
  
  //? Inyeccion de constructores
  constructor(private _servicioFamiliar: ServcioFamiliarService) {}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMenor('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoMenor();
  }

  saludar() {
    this._servicioFamiliar.saludar(
      this._servicioFamiliar.getHermanoMayor() || ''
    );
  }

  preguntar() {
    console.log(
      this._servicioFamiliar.preguntaPorHijo(
        this._servicioFamiliar.getHermanoMayor() || ''
      )
    );
  }
}
