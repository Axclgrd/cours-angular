// spec-service.service.ts
import { Injectable } from '@angular/core';
import {ISpecialiste} from "../models/ispecialiste";


@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {

  constructor() { }

  getSpecialites(): ISpecialiste[] {
    return [
      { _libelle: 'Specialite 1', _idSpec: 1 },
      { _libelle: 'Specialite 2', _idSpec: 2 },
      // Ajoutez plus de spécialités ici
    ];
  }
}
