import { Routes } from "@angular/router";
import { EnterComponent } from "./enter/enter.component";
import { PlasticcardComponent } from "./plasticcard/plasticcard.component";


export const routes: Routes = [
    { path: "", redirectTo: "enter", pathMatch: "full" },
    { path: "enter",    component: EnterComponent },
    { path: "card",    component: PlasticcardComponent },
];
