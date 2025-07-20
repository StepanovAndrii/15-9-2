import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CalorieIntakeCalculatorComponent } from "./calorie-intake-calculator.component";

describe("CalorieIntakeCalculatorComponent", () => {
    let component: CalorieIntakeCalculatorComponent;
    let fixture: ComponentFixture<CalorieIntakeCalculatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CalorieIntakeCalculatorComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CalorieIntakeCalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
