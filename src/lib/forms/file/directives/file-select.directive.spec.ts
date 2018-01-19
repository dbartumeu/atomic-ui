import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CovalentFileModule, AtFileSelectDirective } from '../at-file.module';
import { By } from '@angular/platform-browser';

describe('Directive: FileSelect', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AtFileSelectBasicTestComponent,
      ],
      imports: [
        CovalentFileModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should add multiple attr',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileSelectBasicTestComponent);
      let component: AtFileSelectBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(AtFileSelectDirective));
        expect((<any>directive.attributes).multiple).toBeDefined();
      });
  })));

  it('should throw (fileSelect) event for a single file',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtFileSelectBasicTestComponent);
      let component: AtFileSelectBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(AtFileSelectDirective));
        directive.triggerEventHandler('change', {
          target: directive.nativeElement,
        });
      });
  })));

});

@Component({
  selector: 'at-file-select-basic-test',
  template: `
  <input atFileSelect
         type="file"
         [multiple]="multiple" 
         (fileSelect)="files = $event">
  `,
})
class AtFileSelectBasicTestComponent {
  multiple: boolean;
  disabled: boolean;
  files: FileList | File;
}
