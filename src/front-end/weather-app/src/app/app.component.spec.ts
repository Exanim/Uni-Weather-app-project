import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Component: App', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(app.title).toBe('Weather Webapp');
  });

  it('should have a definition of array: "cards"', () => {
    expect(app.cards).toBeDefined();
  });

  it('should have a definition of city', () => {
    expect(app.city).toBeDefined();
  });

  it('should have a definition of showEachPack', () => {
    expect(app.showEachPack).toBeDefined();
  });

  it('should have a definition of formerCity', () => {
    expect(app.formerCity).toBeDefined();
  });

  it('should have a definition of isFetching', () => {
    expect(app.isFetching).toBeDefined();
  });

  it('form should not submit if input empty', () => {
    fixture.detectChanges();

    const cityInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#city');
    cityInput.value = '';

    const form: HTMLFormElement = fixture.nativeElement.querySelector('#form');

    spyOn(app, 'onLookUpCity');
    form.submit;
    fixture.detectChanges();
    fixture.whenStable();

    expect(app.onLookUpCity).not.toHaveBeenCalled();
  });

  it('form should submit if input contains city', () => {
    fixture.detectChanges();

    const cityInput: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#city');
    const form: HTMLFormElement = fixture.nativeElement.querySelector('#form');
    cityInput.value = 'Budapest';

    spyOn(app, 'onLookUpCity');
    form.dispatchEvent(new Event('submit'));

    expect(app.onLookUpCity).toHaveBeenCalled();
  });

  it('form should not be submittable via click if input empty', ()=>{
    fixture.detectChanges();

    const cityInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#city');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('#submit');

    cityInput.value='';
    fixture.detectChanges();
    button.click();
    spyOn(app, 'onLookUpCity');

    expect(app.onLookUpCity).not.toHaveBeenCalled();
  })

  it('form should be submittable via click if input valid', ()=>{
    fixture.detectChanges();

    const cityInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#city');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('#submit');

    cityInput.value='Budapest';
    fixture.detectChanges();
    spyOn(app, 'onLookUpCity');
    button.click();

    expect(app.onLookUpCity).toHaveBeenCalled();
  })

  it('should have a body element with class main inside', () => {
    const el = fixture.debugElement.query(By.css('body .main'))
    expect(el).toBeTruthy();
  })

  it('should have a main element with class search inside', () => {
    const el = fixture.debugElement.query(By.css('.main .search'))
    expect(el).toBeTruthy();
  })

  it('should not have a main element with class search and city inside', () => {
    const el = fixture.debugElement.query(By.css('.main .search .city'));
    expect(el).toBeFalsy();
  });

  it('should have a search element with form inside', () => {
    const el = fixture.debugElement.query(By.css('.search form'))
    expect(el).toBeTruthy();
  })

  it('should have a form element with input inside', () => {
    const el = fixture.debugElement.query(By.css('form input'))
    expect(el).toBeTruthy();
  })

  it('should have a form element with button inside', () => {
    const el = fixture.debugElement.query(By.css('form button'))
    expect(el).toBeTruthy();
  })

  it('should not have a main element with class pack inside', () => {
    const el = fixture.debugElement.query(By.css('.main .pack'));
    expect(el).toBeFalsy();
  });

  it('should not have a main element with class pack and card inside', () => {
    const el = fixture.debugElement.query(By.css('.main .pack .card'));
    expect(el).toBeFalsy();
  });

  it('should have a body element with footer inside', () => {
    const el = fixture.debugElement.query(By.css('body footer'));
    expect(el).toBeTruthy();
  });

  it('should have a body element with footer and img inside', () => {
    const el = fixture.debugElement.query(By.css('body footer img'));
    expect(el).toBeTruthy();
  });

  it('should have a body element with footer inside with p of data "Kapcsolat"', () => {
    fixture.detectChanges();
    const pElements = fixture.debugElement.queryAll(By.css('body footer p'));
    const pText = pElements[0].nativeElement.textContent;
    expect(pText).toContain('Kapcsolat: info@weatherapp.com');
  });

  it('should have a body element with footer inside with p of data "© 2023 Weather App"', () => {
    fixture.detectChanges();
    const pElements = fixture.debugElement.queryAll(By.css('body footer p'));
    const pText = pElements[1].nativeElement.textContent;
    expect(pText).toContain('© 2023 Weather App');
  });

  it('should have a body element with footer inside with p of data "Weather data provided by"', () => {
    fixture.detectChanges();
    const pElements = fixture.debugElement.queryAll(By.css('body footer p'));
    const pText = pElements[2].nativeElement.textContent;
    expect(pText).toContain('Weather data provided by');
  });

  it('should have a body element with footer inside with p of data "Weather data provided by"', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('body footer p a'));
    const aText = el.nativeElement.textContent;
    expect(aText).toContain('OpenWeather');
  });
});
