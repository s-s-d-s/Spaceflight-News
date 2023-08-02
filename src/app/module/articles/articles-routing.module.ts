import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from '@app/module/articles/articles.component';
import { RoutingDefault } from '@app/constants/routing.constant';
import { ArticlesResolver } from '@app/resolvers/articles.resolver';

export const routes: Routes = [
  {
    path: RoutingDefault,
    pathMatch: 'full',
    component: ArticlesComponent,
    resolve: {
      articles: ArticlesResolver,
    }
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
