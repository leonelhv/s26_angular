import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [LoginComponent, HomeComponent],
})
export class PagesModule {}
