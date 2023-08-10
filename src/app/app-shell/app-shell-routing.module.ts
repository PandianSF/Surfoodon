import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ServiceComponent } from '../service/service.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DonatePageComponent } from '../donate-page/donate-page.component';
import { RequestPageComponent } from '../request-page/request-page.component';
import { CarouselComponent } from '../carousel/carousel.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'donate_page',
        component: DonatePageComponent,
      },
      {
        path: 'request_page',
        component: RequestPageComponent,
      },
      {
        path: 'carousel',
        component: CarouselComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppShellRoutingModule {}
