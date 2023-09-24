import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('Component: App', () => {
  let fixture: ComponentFixture<CardComponent>;
  let app: CardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [FormsModule, HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(CardComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a definition of card', () => {
    expect(app.card).toBeDefined();
  });
});
