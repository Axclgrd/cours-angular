import {ISpecialiste} from "./ispecialiste";

export class Specialite implements ISpecialiste{
  constructor(
    public _libelle: string,
    public _idSpec: number
  ) {
  }
}
