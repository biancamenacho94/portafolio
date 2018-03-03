import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada01:boolean = false; // para verificar si se cargo la informacion en la variable info.

  equipo:any[] = [];
  cargada02:boolean = false;

  constructor( public http:Http ) {
    this.carga_info_general();
    this.carga_sobreNosotros();
  }

  public carga_info_general(){
    this.http.get("assets/data/info.pagina.json")
    .subscribe( data => {
      this.cargada01 = true;
      this.info = data.json();
    })
  }

  public carga_sobreNosotros(){
    this.http.get("https://portfolio-ae1da.firebaseio.com/equipo.json")
    .subscribe( data => {
    //  console.log(data.json());
      this.cargada02 = true;
      this.equipo = data.json();
    })
  }

}
