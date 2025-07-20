import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-calorie-intake-calculator",
    imports: [],
    templateUrl: "./calorie-intake-calculator.component.html",
    styleUrl: "./calorie-intake-calculator.component.scss"
})
export class CalorieIntakeCalculatorComponent {}
