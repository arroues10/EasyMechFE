import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/GeneralComponents/home/home.component';
import { MechanicPageComponent } from './components/MechanicComponents/mechanic-page/mechanic-page.component';
import { AddPartsComponent } from './components/MechanicComponents/add-parts/add-parts.component';
import { AllWorkCardsComponent } from './components/StoreKeeperComponents/all-work-cards/all-work-cards.component';
import { AllWorkCardsAdvisorComponent } from './components/AdvisorComponents/all-work-cards-advisor/all-work-cards-advisor.component';
import { AllMechanicsComponent } from './components/ManagerComponents/all-mechanics/all-mechanics.component';
import { CreateMechanicsComponent } from './components/ManagerComponents/create-mechanics/create-mechanics.component';
import { CreateAdvisorComponent } from './components/ManagerComponents/create-advisor/create-advisor.component';
import { CreateStoreKeeperComponent } from './components/ManagerComponents/create-store-keeper/create-store-keeper.component';
import { WorkCardPartsComponent } from './components/StoreKeeperComponents/work-card-parts/work-card-parts.component';
import { QuoteComponent } from './components/StoreKeeperComponents/quote/quote.component';
import { PageNotFoundComponent } from './components/GeneralComponents/page-not-found/page-not-found.component';
import { WorkCardPartsAdvisorComponent } from './components/AdvisorComponents/work-card-parts-advisor/work-card-parts-advisor.component';
import { AddWorkCardComponent } from './components/AdvisorComponents/add-work-card/add-work-card.component';
import { AllMechanicWorkCardsComponent } from './components/MechanicComponents/all-mechanic-work-cards/all-mechanic-work-cards.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "mechanic-page", component: MechanicPageComponent },
    { path: "add-parts", component: AddPartsComponent },
    { path: "all-work-cards", component: AllWorkCardsComponent },
    { path: "all-work-cards-advisor", component: AllWorkCardsAdvisorComponent },
    { path: "all-mechanics", component: AllMechanicsComponent },
    { path: "all-mechanic-work-cards", component: AllMechanicWorkCardsComponent },
    { path: "create-mechanic", component: CreateMechanicsComponent },
    { path: "create-advisor", component: CreateAdvisorComponent },
    { path: "add-work-card", component: AddWorkCardComponent },
    { path: "create-store-keeper", component: CreateStoreKeeperComponent },
    { path: "work-card-parts/:workCardId", component: WorkCardPartsComponent },
    { path: "work-card-parts-advisor/:workCardId", component: WorkCardPartsAdvisorComponent },
    { path: "quote/:workCardId/:partId", component: QuoteComponent },
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
