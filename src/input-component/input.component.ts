import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-input',
  template: `
    <div>{{value}}</div>
  `,
  directives: [],
  providers: []
})
export class InputComponent {
  @Input()
  public value: string;

  constructor() {}
}
