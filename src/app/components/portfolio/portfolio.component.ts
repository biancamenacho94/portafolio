import { Component } from '@angular/core';
import { ItemsService } from "../../services/items.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent  {

  constructor(public _its:ItemsService) { }



}
