import { Component, OnInit } from '@angular/core'

export interface IStats {
  value: number
  label: string
}

export interface IItems {
  title: string
  description: string
  picture: string
}

@Component({
  selector: 'app-view-home-component',
  templateUrl: './view-home-component.component.html',
  styleUrls: ['./view-home-component.component.css']
})
export class ViewHomeComponentComponent implements OnInit {
  stats: IStats[] = [
    { value: 22, label: 'Избранные' },
    { value: 967, label: 'Просмотров' },
    { value: 30, label: 'Пользователей' }
  ]

  items: IItems[] = [
    {
      title: 'Диван',
      description: 'Это потрясающий диван, который вы бы захотели в свой дом.',
      picture: './assets/couch.jpeg'
    },
    {
      title: 'Комод',
      description: 'Это потрясающий комод, который вы бы захотели в свой дом.',
      picture: './assets/dresser.jpeg'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
