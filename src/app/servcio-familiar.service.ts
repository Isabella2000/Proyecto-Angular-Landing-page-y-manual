import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServcioFamiliarService {
  hermanoMayor?: string;
  hermanoMenor?: string;

  getHermanoMayor(): string {
    return this.hermanoMayor || '';
  }

  setHermanoMayor (hermano: string) {
    this.hermanoMayor = hermano;
  }

  getHermanoMenor (): string {
    return this.hermanoMenor || '';
  }

  setHermanoMenor (hermano: string) {
    this.hermanoMenor = hermano;
  }

  saludar(hermano : string) {
    console.log(`Hola ${hermano}`);
  }

  preguntaPorHijo (hermano : string): string {
    return `Como esta tu hijo? ${hermano}`;
  }

  constructor() {}
}
