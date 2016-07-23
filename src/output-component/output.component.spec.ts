import { setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';
setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

import { Component, ViewChild } from '@angular/core'
import { TestComponentBuilder, async, inject } from '@angular/core/testing';
import { OutputComponent } from './output.component';

describe('Ouput Component', () => {

  describe('output event testing', () => {

    // This test will fail
    it('should set test component testValue variable', async(
      inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
        let template = `
          <sg-output (onValueChange)="testValueChange($event)"></sg-output>
        `;
        tcb.overrideTemplate(MyTestComponent, template)
            .createAsync(MyTestComponent).then(fixture => {
          fixture.componentInstance.outputComponent.setValue('foobar');
          expect(fixture.componentInstance.testValue).toEqual('foobar');

          spyOn(fixture.componentInstance, 'testValueChange');
          fixture.componentInstance.outputComponent.setValue('bizbaz');
          expect(fixture.componentInstance.testValueChange).toHaveBeenCalled();
        });
      })
    ));

  });

});

@Component({ selector: 'sg-my-test', template: '', directives: [OutputComponent] })
class MyTestComponent {
  @ViewChild(OutputComponent)
  outputComponent: OutputComponent;

  public testValue: string;

  testValueChange($event) {
    this.testValue = $event.value;
  }
}
