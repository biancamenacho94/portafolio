import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../../services/items.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {

  constructor(private _its:ItemsService) { }

  ngOnInit() {
  }

}
