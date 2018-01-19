import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovalentFileModule, AtFileInputComponent } from '../at-file.module';
import { By } from '@angular/platform-browser';

describe('Component: FileInput', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AtFileInputBasicTestComponent,
        AtFileInputModelTestComponent,
      ],
      imports: [
        FormsModule,
        CovalentFileModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render content inside .at-file-input button',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileInputBasicTestComponent);
      let component: AtFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.at-file-input span'))).toBeTruthy();
      });
  })));

  it('should mimic file selection and then clear it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileInputBasicTestComponent);
      let component: AtFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.clear();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.value)
            .toBeUndefined();
          });
        });
      });
  })));

  it('should mimic file selection and then clear it by disabling it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileInputBasicTestComponent);
      let component: AtFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.handleSelect([{}]);
        component.disabled = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.value).toBeUndefined();
        });
      });
  })));

  it('should mimic file (select) event',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileInputBasicTestComponent);
      let component: AtFileInputBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      expect(component.files).toBeUndefined();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.files).toBeTruthy();
        });
      });
  })));

  it('should mimic file selection event and check model',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileInputModelTestComponent);
      let component: AtFileInputModelTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      expect(component.files).toBeUndefined();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.files).toBeTruthy();
        });
      });
  })));

  it('should mimic file selection event and check model and then clear it by disabling it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileInputModelTestComponent);
      let component: AtFileInputModelTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      expect(component.files).toBeUndefined();
      fixture.whenStable().then(() => {
        fixture.debugElement.query(By.directive(AtFileInputComponent)).componentInstance.handleSelect([{}]);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.files).toBeTruthy();
          component.disabled = true;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(component.files).toBeUndefined();
          });
        });
      });
  })));

});

@Component({
  selector: 'at-file-input-basic-test',
  template: `
  <at-file-input [multiple]="multiple" [disabled]="disabled" (select)="files = $event">
    <span>test</span>
  </at-file-input>
  `,
})
class AtFileInputBasicTestComponent {
  accept: string;
  multiple: boolean;
  disabled: boolean;
  files: File | FileList;
}

@Component({
  selector: 'at-file-input-model-test',
  template: `
  <at-file-input [(ngModel)]="files" [multiple]="multiple" [disabled]="disabled">
    <span>test</span>
  </at-file-input>
  `,
})
class AtFileInputModelTestComponent {
  multiple: boolean;
  disabled: boolean;
  files: File | FileList;
}
