import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CovalentFileModule, AtFileUploadComponent } from '../at-file.module';
import { By } from '@angular/platform-browser';

describe('Component: FileUpload', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AtFileUploadBasicTestComponent,
      ],
      imports: [
        CovalentFileModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render content inside .at-file-input button',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileUploadBasicTestComponent);
      let component: AtFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.at-file-input span'))).toBeTruthy();
      });
  })));

  it('should mimic file selection and then clear it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileUploadBasicTestComponent);
      let component: AtFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.debugElement.query(By.css('at-file-input')).triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('at-file-input'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeTruthy();
          fixture.debugElement.query(By.css('.at-file-upload-cancel')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
            expect(fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.value)
            .toBeUndefined();
          });
        });
      });
  })));

  it('should mimic file selection and then clear it by disabling it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileUploadBasicTestComponent);
      let component: AtFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.debugElement.query(By.css('at-file-input')).triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('at-file-input'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeTruthy();
          component.disabled = true;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
            expect(fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.value).toBeUndefined();
          });
        });
      });
  })));

  it('should mimic file selection and then upload it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileUploadBasicTestComponent);
      let component: AtFileUploadBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.debugElement.query(By.css('at-file-input')).triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('at-file-input'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeTruthy();
          fixture.debugElement.query(By.css('.at-file-upload')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(component.files).toBeTruthy();
          });
        });
      });
  })));

  it('should mimic file selection and throw (select) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileUploadBasicTestComponent);
      let component: AtFileUploadBasicTestComponent = fixture.debugElement.componentInstance;

      let eventSpy: jasmine.Spy = spyOn(component, 'selectEvent');

      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
        expect(eventSpy.calls.count()).toBe(0);
        fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(eventSpy.calls.count()).toBe(1);
        });
      });
  })));

  it('should mimic file selection, upload click and throw (upload) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileUploadBasicTestComponent);
      let component: AtFileUploadBasicTestComponent = fixture.debugElement.componentInstance;

      let eventSpy: jasmine.Spy = spyOn(component, 'uploadEvent');

      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
        expect(eventSpy.calls.count()).toBe(0);
        fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.selectFiles).toBeTruthy();
          expect(eventSpy.calls.count()).toBe(0);
          fixture.debugElement.query(By.css('.at-file-upload')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(eventSpy.calls.count()).toBe(1);
          });
        });
      });
  })));

  it('should mimic file selection, cancel click and throw (cancel) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileUploadBasicTestComponent);
      let component: AtFileUploadBasicTestComponent = fixture.debugElement.componentInstance;

      let eventSpy: jasmine.Spy = spyOn(component, 'cancelEvent');

      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('at-file-input'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-file-upload'))).toBeFalsy();
        fixture.debugElement.query(By.directive(AtFileUploadComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.selectFiles).toBeTruthy();
          expect(eventSpy.calls.count()).toBe(0);
          fixture.debugElement.query(By.css('.at-file-upload-cancel')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(eventSpy.calls.count()).toBe(1);
          });
        });
      });
  })));

});

@Component({
  selector: 'at-file-upload-basic-test',
  template: `
  <at-file-upload #fileUpload [multiple]="multiple" [disabled]="disabled" (select)="selectEvent($event)"
                  (upload)="uploadEvent($event)" (cancel)="cancelEvent()">
    <span>{{ fileUpload.value?.name }}</span>
    <ng-template at-file-input-label>
      <span>Choose a file...</span>
    </ng-template>
  </at-file-upload>
  `,
})
class AtFileUploadBasicTestComponent {
  accept: string;
  multiple: boolean;
  disabled: boolean;
  files: File | FileList;
  selectFiles: File | FileList;

  selectEvent(files: File | FileList): void {
    this.selectFiles = files;
  }

  uploadEvent(files: File | FileList): void {
    this.files = files;
  }

  cancelEvent(): void {
    this.selectFiles = undefined;
    this.files = undefined;
  }
}
