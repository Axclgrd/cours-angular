// etudiant-hors-paris.component.ts
import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../models/ietudiant';
import { EtudiantService } from '../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css']
})
export class EtudiantHorsParisComponent implements OnInit {
  etudiantsHorsParis: IEtudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantsHorsParis = this.etudiantService.getEtudiantsHorsParis();
  }
}
