import { setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';
setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

import { TestComponentBuilder, async, inject } from '@angular/core/testing';
import { SimpleComponent } from './simple.component';



describe('Simple Component', () => {

  describe('initialization', () => {

    it('should instantiate', async(
      inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
        tcb.createAsync(SimpleComponent).then(fixture => {
          fixture.detectChanges();
          expect(fixture.componentInstance).toBeDefined();
        });
      })
    ));

  });

});
