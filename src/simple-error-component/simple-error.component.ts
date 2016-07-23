import { Component } from '@angular/core';

@Component({
  selector: 'sg-simple-error',
  template: `
    <div ngSwitchWhen="">This is my simple component.</div>
  `,
  directives: [],
  providers: []
})
export class SimpleErrorComponent {
  public test: string;

  constructor() {}

  ngOnInit() {
    this.test = 'test';
  }
}
