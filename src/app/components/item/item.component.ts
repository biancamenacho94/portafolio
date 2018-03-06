import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ItemsService } from "../../services/items.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

  item:any = undefined;
  codigo:string = undefined;

  constructor( private route:ActivatedRoute,
               private _its:ItemsService ) {

    route.params.subscribe( parametros=>{
      // console.log(parametros);
      // console.log(parametros['cod']);
      _its.cargar_item( parametros['cod'] )
      .subscribe( data => {
          //console.log(data.json());
          this.item = data.json();
          this.codigo = parametros['cod'];
          console.log(this.codigo);
      })

    })

  }

}
