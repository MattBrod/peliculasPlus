import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent
  ]
})
export class ElementsModule { }
