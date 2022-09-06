import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ViewsRoutingModule } from './views-routing.module'
import { ViewHomeComponentComponent } from './view-home-component/view-home-component.component'
import { StatisticsComponent } from './statistics/statistics.component'
import { ItemListComponent } from './item-list/item-list.component'
import { SharedModule } from "../shared/shared.module"


@NgModule({
  declarations: [ViewHomeComponentComponent, StatisticsComponent, ItemListComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
  exports: []
})
export class ViewsModule { }
