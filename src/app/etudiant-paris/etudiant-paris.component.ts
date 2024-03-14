// etudiant-paris.component.ts
import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../models/ietudiant';
import {EtudiantService} from "../services/etudiant-service.service";

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.css']
})
export class EtudiantParisComponent implements OnInit {
  etudiantsParis: IEtudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantsParis = this.etudiantService.getEtudiantsParis();
  }
}
