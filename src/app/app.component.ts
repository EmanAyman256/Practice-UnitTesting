import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice-UnitTesting';
  showParagraph = false;

  addParagraph() {
    this.showParagraph = true;
  }
  multiply(a:number,b:number)
  {
    return a*b;
  }
}
