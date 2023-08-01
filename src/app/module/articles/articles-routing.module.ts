import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from "@app/module/articles/articles.component";
import { RoutingDefault } from "@app/constants/routing.constant";

export const routes: Routes = [
  {
    path: RoutingDefault,
    pathMatch: 'full',
    component: ArticlesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ArticlesRoutingModule {
}
