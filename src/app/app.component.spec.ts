import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountryFormField } from "../shared/enums/country-form-fields";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have label country', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toContain('Country');
  });

  it('should have input', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input[placeholder="Country"]')).toBeDefined();
  });
  it('should throw error message when input is focused and value did not entered', function () {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    component.formGroup.get(CountryFormField.country)?.markAsTouched();
    component.formGroup.get(CountryFormField.country)?.updateValueAndValidity();
    fixture.detectChanges();
    expect(compiled.querySelector('.from__message--error')?.textContent).toContain('Country is required')
  });

  it('should have button', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeDefined();
  });

  it('should disabled button when input value is not set', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button[disabled]')).toBeDefined();
  });

  it('should console log in function printFormValue', () => {
    fixture.detectChanges();
    const spy = spyOn(console, 'log');
    component.printFormValue();
    expect(spy).toHaveBeenCalled()
  });

  it('should console log form value in function printFormValue', () => {
    fixture.detectChanges();
    const spy = spyOn(console, 'log');
    component.formGroup.get(CountryFormField.country)?.patchValue({country: 'test', code: 'test'} as any);
    component.printFormValue();
    expect(spy).toHaveBeenCalledWith('Form field country: ', {country: 'test', code: 'test'})
  });

  it('should call app service in function onComplete', () => {
    const spy = spyOn(component['appService'], 'getCountries' as any).and.callThrough();
    component.onComplete({query: 'ac', originalEvent: new Event('click')});
    expect(spy).toHaveBeenCalled()
  });

  it('should call app service in function onComplete with param abc', () => {
    const spy = spyOn(component['appService'], 'getCountries' as any).and.callThrough();
    component.onComplete({query: 'abc', originalEvent: new Event('click')});
    expect(spy).toHaveBeenCalledWith('abc');
  });

});
