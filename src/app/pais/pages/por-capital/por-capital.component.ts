import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino:string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  
  constructor(private PaisService: PaisService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;

      this.PaisService.buscarCapital(this.termino)
      .subscribe( (paises) =>{
        this.paises = paises;

      }, (err)=>{
        this.hayError = true;
        this.paises = [];
      });

  }

}