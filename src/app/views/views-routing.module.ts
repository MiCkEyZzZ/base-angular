import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ViewHomeComponentComponent } from "./view-home-component/view-home-component.component"

const routes: Routes = [
  { path: '', component: ViewHomeComponentComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
