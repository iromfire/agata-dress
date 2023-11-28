import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MainSectionComponent } from './landing/components/main-section/main-section.component';
import { PortfolioSectionComponent } from './landing/components/portfolio-section/portfolio-section.component';
import { AboutSectionComponent } from './landing/components/about-section/about-section.component';
import { OrderComponent } from './order/order.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutSuccessComponent } from './order/checkout-success/checkout-success.component';
import { FooterComponent } from './landing/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MainSectionComponent,
    PortfolioSectionComponent,
    AboutSectionComponent,
    OrderComponent,
    LandingComponent,
    CheckoutSuccessComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    FormsModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    TooltipModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideNgxMask()],
})
export class AppModule {}
