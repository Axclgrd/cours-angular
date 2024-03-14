// etudiant.component.ts
import { Component, OnInit } from '@angular/core';
import {IEtudiant} from "../models/ietudiant";
import {EtudiantService} from "../services/etudiant-service.service";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: IEtudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getEtudiants();
  }
}
