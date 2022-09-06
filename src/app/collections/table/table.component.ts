import {Component, Input, OnInit} from '@angular/core'
import { IData, IHeader } from "../collections-home/collections-home.component"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('class')
  className = ''

  @Input()
  data: any[] = []

  @Input()
  headers: IHeader[] = []

  constructor() {}

  ngOnInit(): void {}

}
