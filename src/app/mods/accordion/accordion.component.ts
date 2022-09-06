import { Component, OnInit, Input } from '@angular/core'

import { IAccordions } from "../mods-home/mods-home-component"

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input()
  data: IAccordions[] = []
  openItemIndex: number = 0

  constructor() { }

  ngOnInit(): void {}

  onClick(index: number) {
    index === this.openItemIndex
      ? this.openItemIndex = -1
      : this.openItemIndex = index
  }

}
