import { Component } from '@angular/core';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { AppService } from "./app.service";
import { ButtonModule } from "primeng/button";
import { Country } from "./model";
import { CommonModule } from "@angular/common";
import { CountryFormField } from "../shared/enums/country-form-fields";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, ReactiveFormsModule, ButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private appService: AppService, private fb: FormBuilder) {
  }

  public formField = CountryFormField;
  public suggestions: Partial<Country>[] = []
  public formGroup = this.fb.group({
    [CountryFormField.country]: ['', Validators.required]
  })
  public printFormValue = (): void => {
    console.log('Form field country: ', this.formGroup.get(CountryFormField.country)?.value)
  }

  public onComplete = ({query}: AutoCompleteCompleteEvent): void => {
    this.appService.getCountries(query).subscribe((value: Partial<Country>[]) => {
      this.suggestions = value;
    })
  }
}
