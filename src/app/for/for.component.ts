import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss'],
})
export class ForComponent {
  public items: string[] = ['blue', 'white', 'yellow', 'black', 'pink'];

  @Output() public selected = new EventEmitter();

  public select(color: string) {
    this.selected.emit(color);
  }
}
