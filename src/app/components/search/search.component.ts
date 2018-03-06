import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

//servicio
import { ItemsService } from "../../services/items.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino:string = undefined;

  constructor( private route:ActivatedRoute,
               private _its:ItemsService) {
                 
      route.params.subscribe( parametros=>{
        this.termino = parametros['termino'];
        console.log(this.termino);

        _its.buscar_items( this.termino );

      })
    }



  }
