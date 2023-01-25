import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TablaComponent } from './tabla/tabla.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, TablaComponent, FooterComponent],
  imports: [CommonModule, RouterLink],
  exports: [HeaderComponent, TablaComponent, FooterComponent],
})
export class ComponentsModule {}
