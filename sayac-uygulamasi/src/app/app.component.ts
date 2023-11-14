import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sayac-uygulamasi';
  counter: number = 0;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }

  resetCounter() {
    this.counter = 0;
  }

  





}
