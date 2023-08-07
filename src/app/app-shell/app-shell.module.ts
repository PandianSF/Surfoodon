import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Service } from '../app.service';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http'; // add this line

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, AppShellRoutingModule, HttpClientModule],
  providers: [Service, HttpClient],
})
export class AppShellModule {}
