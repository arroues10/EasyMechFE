import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { CreateMechanicsComponent } from './components/ManagerComponents/create-mechanics/create-mechanics.component';
import { CreateStoreKeeperComponent } from './components/ManagerComponents/create-store-keeper/create-store-keeper.component';
import { CreateAdvisorComponent } from './components/ManagerComponents/create-advisor/create-advisor.component';
import { AddPartsComponent } from './components/MechanicComponents/add-parts/add-parts.component';
import { AllWorkCardsComponent } from './components/StoreKeeperComponents/all-work-cards/all-work-cards.component';
import { WorkCardPartsComponent } from './components/StoreKeeperComponents/work-card-parts/work-card-parts.component';
import { QuoteComponent } from './components/StoreKeeperComponents/quote/quote.component';
import { AllMechanicsComponent } from './components/ManagerComponents/all-mechanics/all-mechanics.component';
import { SignInComponent } from './components/GeneralComponents/sign-in/sign-in.component';
import { LayoutComponent } from './components/GeneralComponents/layout/layout.component';
import { MenuComponent } from './components/GeneralComponents/menu/menu.component';
import { HomeComponent } from './components/GeneralComponents/home/home.component';
import { PageNotFoundComponent } from './components/GeneralComponents/page-not-found/page-not-found.component';
import { MechanicPageComponent } from './components/MechanicComponents/mechanic-page/mechanic-page.component';
import { AllWorkCardsAdvisorComponent } from './components/AdvisorComponents/all-work-cards-advisor/all-work-cards-advisor.component';
import { WorkCardPartsAdvisorComponent } from './components/AdvisorComponents/work-card-parts-advisor/work-card-parts-advisor.component';
import { AddWorkCardComponent } from './components/AdvisorComponents/add-work-card/add-work-card.component';
import { PartsStatusComponent } from './components/MechanicComponents/parts-status/parts-status.component';
import { AllMechanicWorkCardsComponent } from './components/MechanicComponents/all-mechanic-work-cards/all-mechanic-work-cards.component';

@NgModule({
    declarations: [SignInComponent, LayoutComponent, MenuComponent, HomeComponent, PageNotFoundComponent, MechanicPageComponent, AddPartsComponent, AllWorkCardsComponent, WorkCardPartsComponent, QuoteComponent, AllMechanicsComponent, AllWorkCardsAdvisorComponent, CreateMechanicsComponent, CreateStoreKeeperComponent, CreateAdvisorComponent, WorkCardPartsAdvisorComponent, AddWorkCardComponent, PartsStatusComponent, AllMechanicWorkCardsComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
