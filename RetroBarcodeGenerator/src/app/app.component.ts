import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  colors: string[];
  barcode: string[];

  constructor() {
    this.title = 'Retro Barcode Generator';
    this.colors = ['Chartreuse', 'CornflowerBlue', 'Crimson', 'DarkCyan', 'DarkGray', 'DarkGreen', 'Olive', 'Orchid', 'RoyalBlue', 'Snow', 'Maroon', 'FloralWhite'];
    this.barcode = [];
    for (let i = 0; i < 10; i++) {
        this.barcode[i] = this.colors[Math.floor(Math.random()*this.colors.length)];
    }
  }
}
