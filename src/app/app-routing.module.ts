import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from "./home/home.component"
import { NotfoundComponent } from "./notfound/notfound.component"

const routes: Routes = [
  {
    path: 'modules',
    loadChildren: () => import('./mods/mods.module')
      .then((m) => m.ModsModule)
  },
  {
    path: 'views',
    loadChildren: () => import('./views/views.module')
      .then((m) => m.ViewsModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module')
      .then((c) => c.CollectionsModule)
  },
  {
    path: 'elements',
    loadChildren: () => import('./elements/elements.module')
      .then((m) => m.ElementsModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
