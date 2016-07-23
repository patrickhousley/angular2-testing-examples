import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sg-output',
  template: `
    <div>{{value}}</div>
  `,
  directives: [],
  providers: []
})
export class OutputComponent {
  @Output()
  public onValueChange = new EventEmitter();
  private value: string;

  constructor() {}

  setValue(value) {
    this.value = value;
    this.onValueChange.emit({
      value: this.value
    });
  }
}
