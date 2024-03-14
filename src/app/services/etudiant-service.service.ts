// etudiant.service.ts
import { Injectable } from '@angular/core';
import {IEtudiant} from "../models/ietudiant";
import {Etudiant} from "../models/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor() { }

  getEtudiants(): IEtudiant[] {
    return [
      new Etudiant('Nom1', 'Prenom1', 'Rue1', 'CP1', 'Ville1', 'email1@example.com', 'Genre1', 20, 1),
      new Etudiant('Nom2', 'Prenom2', 'Rue2', 'CP2', 'Ville2', 'email2@example.com', 'Genre2', 22, 2),
      new Etudiant('Nom3', 'Prenom3', 'Rue3', 'CP3', 'Paris', 'email3@example.com', 'Genre1', 19, 3),
    ];
  }
  // etudiant.service.ts
  getEtudiantsParis(): IEtudiant[] {
    return this.getEtudiants().filter(etudiant => etudiant._ville === 'Paris');
  }
  // etudiant.service.ts
  getEtudiantsHorsParis(): IEtudiant[] {
    return this.getEtudiants().filter(etudiant => etudiant._ville !== 'Paris');
  }
}
