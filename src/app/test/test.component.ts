import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" [style.color]="color" > You choose {{color}} color.</div>
      <div *ngSwitchCase="'green'"  [style.color]="color"  > You choose {{color}} color.</div>
      <div *ngSwitchCase="'blue'"  [style.color]="color"  > You choose {{color}} color.</div>
      <div *ngSwitchDefault  [style.color]="color"  > choose again. you choose {{color}} color.</div>

    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public color:String = 'yellow';

  constructor() { }

  ngOnInit() {
  }

}
