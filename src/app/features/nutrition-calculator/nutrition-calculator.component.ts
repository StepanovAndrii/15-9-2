import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-nutrition-calculator",
    imports: [],
    templateUrl: "./nutrition-calculator.component.html",
    styleUrl: "./nutrition-calculator.component.scss"
})
export class NutritionCalculatorComponent {}
