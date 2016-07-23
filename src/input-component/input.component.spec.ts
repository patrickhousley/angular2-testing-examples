import { setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';
setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

import { Component, ViewChild } from '@angular/core'
import { TestComponentBuilder, async, inject } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('Input Component', () => {

  describe('input value testing', () => {

    // This test will fail
    it('should set component test variable', async(
      inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
        let template = `
          <sg-input [value]="testValue"></sg-input>
        `;
        tcb.overrideTemplate(MyTestComponent, template)
            .createAsync(MyTestComponent).then(fixture => {
          fixture.componentInstance.testValue = 'foobar';
          fixture.detectChanges();
          expect(fixture.componentInstance.inputComponent.value).toEqual('foobar');

          fixture.componentInstance.testValue = 'bizbaz';
          // fixture.detectChanges();
          expect(fixture.componentInstance.inputComponent.value).toEqual('bizbaz');
        });
      })
    ));

  });

});

@Component({ selector: 'sg-my-test', template: '', directives: [InputComponent] })
class MyTestComponent {
  @ViewChild(InputComponent)
  inputComponent: InputComponent;

  public testValue: string;
}
