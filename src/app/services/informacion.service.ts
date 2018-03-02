import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false; // para verificar si se cargo la informacion en la variable info.

  constructor( public http:Http ) {

    this.http.get("assets/data/info.pagina.json")
    .subscribe( data => {
      console.log(data.json());
      this.cargada = true;
      this.info = data.json();
    })

  }
}
