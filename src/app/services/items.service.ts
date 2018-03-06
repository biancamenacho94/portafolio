import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ItemsService {

  //crear un arreglo de items para cargar con los datos del servicio.
  items:any[] = [];
  cargandoItems:boolean = true;

  items_filtrados:any[] = [];

  constructor( private http:Http ) {
    this.cargar_items();
  }

  public buscar_items(termino:string){

    console.log("Buscando..");
    console.log( this.items.length )

    if( this.items.length === 0 ){
        this.cargar_items().then( ()=>{
          // aqui ya sabemos que termino la carga de los items.
          this.filtrar_items(termino);
        });
    }else{
      this.filtrar_items(termino);
    }


  }

  private filtrar_items(termino:string){
    this.items_filtrados = []; //vaciamos el array para evitar acumulacion.
    termino = termino.toLowerCase();
    
    this.items.forEach( item=>{

      if( item.categoria.indexOf( termino ) >= 0 || item.titulo.toLowerCase().indexOf( termino ) >= 0){
        this.items_filtrados.push( item );
        console.log(this.items_filtrados);
      }

    })
  }

  public cargar_items(){

    this.cargandoItems = true;

    let promesa = new Promise((resolve,reject) => {

      if( this.items.length === 0 ){
        this.http.get('https://portfolio-ae1da.firebaseio.com/items.json')
        .subscribe( data => {
          this.cargandoItems = false;
          //console.log(data.json());
          this.items = data.json();
          resolve();
        });
      }

    });
    return promesa;

  }

  public cargar_item( cod:string ){
    return this.http.get(`https://portfolio-ae1da.firebaseio.com/items_descripcion/${ cod }.json`);
  }

}
