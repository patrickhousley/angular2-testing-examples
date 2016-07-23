import { setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';
setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

import { TestComponentBuilder, async, inject } from '@angular/core/testing';
import { SimpleErrorComponent } from './simple-error.component';

describe('Simple Error Component', () => {

  describe('initialization', () => {

    // This is good
    it('should instantiate', async(
      inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
        tcb.createAsync(SimpleErrorComponent).then(fixture => {
          fixture.detectChanges();
          expect(fixture.componentInstance).toBeDefined();
        });
      })
    ));

    // This test will pass (not so good)
    it('should instantiate', () => {
      let simpleErrorComponent = new SimpleErrorComponent();
      expect(simpleErrorComponent).toBeDefined();
    });

  });

  describe('ngOnInit', () => {

    // This test will fail
    it('should set component test variable', async(
      inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
        tcb.createAsync(SimpleErrorComponent).then(fixture => {
          expect(fixture.componentInstance).toBeDefined();
          expect(fixture.componentInstance.test).toEqual('test');
        });
      })
    ));

    // This test will fail
    it('should set component test variable', () => {
      let simpleErrorComponent = new SimpleErrorComponent();
      expect(simpleErrorComponent).toBeDefined();
      expect(simpleErrorComponent.test).toEqual('test');
    });

  });

});
