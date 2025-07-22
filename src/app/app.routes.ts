import { Routes } from "@angular/router";
import { NutritionCalculatorComponent } from "./features/nutrition-calculator/nutrition-calculator.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "nutrition-calculator",
        pathMatch: "full"
    },
    {
        path: "nutrition-calculator",
        component: NutritionCalculatorComponent
    }
];
