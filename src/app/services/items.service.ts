import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ItemsService {

  //crear un arreglo de items para cargar con los datos del servicio.
  items:any[] = [];
  cargandoItems:boolean = true;

  constructor( private http:Http ) {
    this.cargar_items();

  }

  public cargar_items(){

    this.cargandoItems = true;

    if( this.items.length === 0 ){
      this.http.get('https://portfolio-ae1da.firebaseio.com/items.json')
      .subscribe( data => {
        this.cargandoItems = false;
        //console.log(data.json());
        this.items = data.json();
      })
    }
  }

  public cargar_item( cod:string ){
    return this.http.get(`https://portfolio-ae1da.firebaseio.com/items_descripcion/${ cod }.json`);
  }

}
