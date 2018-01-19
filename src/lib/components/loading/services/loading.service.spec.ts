import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { CovalentLoadingModule, LoadingMode, LoadingType, LoadingStrategy, AtLoadingService } from '../loading.module';

describe('Service: Loading', () => {
  let overlayContainerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AtLoadingWrapperTestComponent,
      ],
      imports: [
        NoopAnimationsModule,
        CovalentLoadingModule,
      ],
      providers: [
        {provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return {getContainerElement: () => overlayContainerElement};
        }},
      ],
    });
    TestBed.compileComponents();
  }));

  afterEach(() => {
    overlayContainerElement.innerHTML = '';
  });

  it('should render default fullscreen loading component', (done: DoneFn) => {
    inject([AtLoadingService], (loadingService: AtLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtLoadingWrapperTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      loadingService.register();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.querySelector('at-loading')).toBeTruthy();
        expect(overlayContainerElement.querySelector('mat-progress-spinner')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.mat-primary')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-overlay')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-fullscreen')).toBeTruthy();
        loadingService.resolve();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(overlayContainerElement.querySelector('at-loading')).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should render configured progress bar, accent fullscreen loading component', (done: DoneFn) => {
    inject([AtLoadingService], (loadingService: AtLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtLoadingWrapperTestComponent);
      loadingService.create({
        name: 'name',
        type: LoadingType.Linear,
        color: 'accent',
      });
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.querySelector('at-loading')).toBeTruthy();
        expect(overlayContainerElement.querySelector('mat-progress-bar')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.mat-accent')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-overlay')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-fullscreen')).toBeTruthy();
        loadingService.resolve('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(overlayContainerElement.querySelector('at-loading')).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should render configured progress bar, accent fullscreen loading component', (done: DoneFn) => {
    inject([AtLoadingService], (loadingService: AtLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtLoadingWrapperTestComponent);
      loadingService.create({
        name: 'name',
        type: LoadingType.Linear,
        color: 'accent',
      });
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.querySelector('at-loading')).toBeTruthy();
        expect(overlayContainerElement.querySelector('mat-progress-bar')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.mat-accent')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-overlay')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-fullscreen')).toBeTruthy();
        loadingService.resolve('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(overlayContainerElement.querySelector('at-loading')).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should throw error when trying to create loading component', (done: DoneFn) => {
    inject([AtLoadingService], (loadingService: AtLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtLoadingWrapperTestComponent);
      expect(function(): void {
        loadingService.create({
          name: undefined,
          type: LoadingType.Linear,
          color: 'accent',
        });
      }).toThrowError();
      done();
    })();
  });

  it('should remove overriding loading component with the same name if fullscreen', (done: DoneFn) => {
    inject([AtLoadingService], (loadingService: AtLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtLoadingWrapperTestComponent);
      expect(function(): void {
        loadingService.create({
          name: 'name',
          type: LoadingType.Linear,
          color: 'accent',
        });
      }).not.toThrowError();
      fixture.detectChanges();
      expect(function(): void {
        loadingService.create({
          name: 'name',
          type: LoadingType.Linear,
          color: 'accent',
        });
      }).not.toThrowError();
      done();
    })();
  });

  it('should fail to resolve/setValue/register unknown names', (done: DoneFn) => {
    inject([AtLoadingService], (loadingService: AtLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtLoadingWrapperTestComponent);
      expect(loadingService.register('unknown')).toBeFalsy();
      expect(loadingService.setValue('unknown', 50)).toBeFalsy();
      expect(loadingService.resolve('unknown')).toBeFalsy();
      done();
    })();
  });

  it('should render default fullscreen by registering 3 times and then resolve by calling resolveAll', (done: DoneFn) => {
    inject([AtLoadingService], (loadingService: AtLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtLoadingWrapperTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      loadingService.register();
      loadingService.register();
      loadingService.register();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.querySelector('at-loading')).toBeTruthy();
        expect(overlayContainerElement.querySelector('mat-progress-spinner')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.mat-primary')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-overlay')).toBeTruthy();
        expect(overlayContainerElement.querySelector('.at-fullscreen')).toBeTruthy();
        loadingService.resolveAll();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(overlayContainerElement.querySelector('at-loading')).toBeFalsy();
          done();
        });
      });
    })();
  });
});

@Component({
  selector: 'at-loading-wrapper-test',
  template: `
  <div class="content"></div>
  `,
})
class AtLoadingWrapperTestComponent {

}
