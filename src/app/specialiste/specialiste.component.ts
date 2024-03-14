// specialiste.component.ts
import { Component, OnInit } from '@angular/core';
import {ISpecialiste} from "../models/ispecialiste";
import {SpecServiceService} from "../services/spec-service.service";

@Component({
  selector: 'app-specialiste',
  templateUrl: './specialiste.component.html',
  styleUrls: ['./specialiste.component.css']
})
export class SpecialisteComponent implements OnInit {
  specialites: ISpecialiste[] = [];

  constructor(private specService: SpecServiceService) { }

  ngOnInit(): void {
    this.specialites = this.specService.getSpecialites();
  }
}
