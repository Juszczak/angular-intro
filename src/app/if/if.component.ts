import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss'],
})
export class IfComponent {
  @Input() public visible: boolean;
}
