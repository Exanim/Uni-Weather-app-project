import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, NgForm } from "@angular/forms";

describe('Component: App', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, HttpClientModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it('should create the app', () =>{
    expect(app).toBeTruthy();
  })

  it('should have the correct title', ()=>{
    expect(app.title).toBe('Weather Webapp');
  })

  it('should have a definition of array: "cards"', ()=>{
    expect(app.cards).toBeDefined();
  })

  it('should have a definition of city', ()=>{
    expect(app.city).toBeDefined();
  })

  it('should have a definition of showEachPack', ()=>{
    expect(app.showEachPack).toBeDefined();
  })

  it('should have a definition of formerCity', ()=>{
    expect(app.formerCity).toBeDefined();
  })

  it('should have a definition of isFetching', ()=>{
    expect(app.isFetching).toBeDefined();
  })

  it('form should not submit if input empty', () => {
    fixture.detectChanges();
  
    const cityInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#city');
    const form = fixture.nativeElement.querySelector('form');
    cityInput.value = '';
  
    spyOn(app, 'onLookUpCity');
    form.dispatchEvent(new Event('submit'));
  
    fixture.whenStable().then(() => {
      expect(app.onLookUpCity).not.toHaveBeenCalled();
    });
  });
  

  // it('should call onLookUpCity when the form is submitted', async () => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   spyOn(app, 'onLookUpCity');
  
  //   app.city = 'Budapest'; // Állítsa be a city értékét először
    
  //   const form = fixture.nativeElement.querySelector('form');
  //   form.dispatchEvent(new Event('submit'));
    
  //   await fixture.whenStable(); // Várjon az aszinkron művelet végére
    
    
  //   fixture.detectChanges();
  //   expect(app.formerCity).toBe('Budapest');
  //   // Itt ellenőrizheti az egyéb elvárt eredményeket vagy viselkedést
  // });
});