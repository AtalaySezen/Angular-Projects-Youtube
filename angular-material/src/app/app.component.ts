import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  loader: boolean = false;


  getFakeData() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 500);

  }




}
