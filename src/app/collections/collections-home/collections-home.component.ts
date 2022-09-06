import { Component, OnInit } from '@angular/core'

export interface IData {
  name: string
  age: string | number
  job: string
  employed: boolean
}

export interface IHeader {
  key: string
  label: string | number
}

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data: IData[] = [
    { name: 'Дмитрий', age: 34, job: 'Дизайнер', employed: true },
    { name: 'Андрей', age: 37, job: 'Тестировщик', employed: false },
    { name: 'Антон', age: 34, job: 'Инженер-программист', employed: true }
  ]

  headers: IHeader[] = [
    { key: 'employed', label: 'Работающий' },
    { key: 'name', label: 'Имя' },
    { key: 'age', label: 'Возраст' },
    { key: 'job', label: 'Профессия' }
  ]

  constructor() {}

  ngOnInit(): void {
  }
}
