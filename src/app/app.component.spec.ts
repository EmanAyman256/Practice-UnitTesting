import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async() => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }).compileComponents();
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges(); 
});
 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Practice-UnitTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Practice-UnitTesting');
  });

  //!Function Testing
  it('should show multiplication',()=>{
    const comp =new AppComponent();
    const a=5;
    const b=4;
    const res=comp.multiply(a,b);
    expect(res).toBe(20)
   })
   
  //!DOM TESTING
  it('should not show the paragraph initially', () => {
    const paragraph = fixture.debugElement.query(By.css('p'));
    expect(paragraph).toBeNull(); // Paragraph should not exist
  });
  it('should add a paragraph when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null); // Simulate button click
    fixture.detectChanges(); // Update the DOM

    const paragraph = fixture.debugElement.query(By.css('p'));
    expect(paragraph).toBeTruthy(); // Paragraph should exist
    expect(paragraph.nativeElement.textContent).toBe('Hello, World!');
  });
});
