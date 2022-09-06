import { Component, OnInit, Input } from '@angular/core'

import { IStats } from "../view-home-component/view-home-component.component"

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input()
  data: IStats[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
