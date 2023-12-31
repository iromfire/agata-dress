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
import { OrderComponent } from './components/order/order.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutSuccessComponent } from './components/order/checkout-success/checkout-success.component';
import { FooterSectionComponent } from './landing/components/footer-section/footer-section.component';
import { RepairComponent } from './components/repair/repair.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';

import { AccordionModule } from 'primeng/accordion';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru-RU');

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
        FooterSectionComponent,
        RepairComponent,
        AccessoriesComponent
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
        AccordionModule
    ],
    bootstrap: [AppComponent],
    providers: [provideNgxMask()]
})
export class AppModule {}
