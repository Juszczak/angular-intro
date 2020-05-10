import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Hello!';

  public x: number = 345;
  public y: number = 678;

  public color: string;

  public setColor(color: string) {
    this.color = color;
  }
}
