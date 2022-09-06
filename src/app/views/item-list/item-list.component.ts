import { Component, OnInit, Input } from '@angular/core'

import { IItems } from "../view-home-component/view-home-component.component"

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input()
  data: IItems[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
