import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { DecimalPipe } from "@angular/common";
import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Gender } from "../../shared/types/gender.type";
import { minNumberValidator } from "../../shared/validators/min-number.validator";
import { maxNumberValidator } from "../../shared/validators/max-number.validator";
import { Activity } from "../../shared/types/activity.type";

@Component({
    selector: "app-nutrition-calculator",
    imports: [
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        DecimalPipe
    ],
    templateUrl: "./nutrition-calculator.component.html",
    styleUrl: "./nutrition-calculator.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class NutritionCalculatorComponent {
    public bmr: number | null = null;
    public tdee: number | null = null;

    private fb: FormBuilder = inject(FormBuilder);

    public nutritionCalculatorUserInfoForm = this.fb.group({
        gender: this.fb.control<Gender | null>(null, [Validators.required]),
        weight: this.fb.control<number | null>(null, [
            Validators.required,
            minNumberValidator(30),
            maxNumberValidator(200)
        ]),
        height: this.fb.control<number | null>(null, [
            Validators.required,
            minNumberValidator(100),
            maxNumberValidator(250)
        ]),
        age: this.fb.control<number | null>(null, [
            Validators.required,
            minNumberValidator(13),
            maxNumberValidator(80)
        ]),
        activity: this.fb.control<Activity | null>(null, [Validators.required])
    });

    public blockInvalidNumberInput(event: KeyboardEvent) {
        const key = event.key;

        if (event.ctrlKey || event.metaKey || event.altKey) {
            return;
        }

        const allowedSystemKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "Tab",
            "Home",
            "End"
        ];

        if (allowedSystemKeys.includes(key)) return;

        if (!/^[0-9]$/.test(key)) event.preventDefault();
    }

    public submit() {
        if (this.nutritionCalculatorUserInfoForm.invalid) {
            this.nutritionCalculatorUserInfoForm.markAllAsTouched();
            return;
        }

        const bmrResult = this.calculateBMRCalories();

        if (!bmrResult) return;

        this.bmr = bmrResult;
        const { activity } = this.nutritionCalculatorUserInfoForm.value;
        if (activity) this.tdee = this.calculateTDEE(this.bmr, activity);
    }

    private calculateBMRCalories(): number | undefined {
        if (this.nutritionCalculatorUserInfoForm.invalid) return;

        const { gender, weight, height, age } =
            this.nutritionCalculatorUserInfoForm.value;

        if (!(gender && weight && height && age)) return;

        switch (gender) {
            case "male":
                return 10 * weight + 6.25 * height - 5 * age + 5;
            case "female":
                return 10 * weight + 6.25 * height - 5 * age - 161;
        }
    }

    private calculateTDEE(bmr: number, activity: Activity) {
        switch (activity) {
            case "sedentary":
                return bmr * 1.2;
            case "lightly":
                return bmr * 1.375;
            case "moderately":
                return bmr * 1.55;
            case "veryActive":
                return bmr * 1.725;
            case "extraActive":
                return bmr * 1.9;
        }
    }
}
