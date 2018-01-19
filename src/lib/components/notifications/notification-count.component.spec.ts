import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CovalentNotificationsModule,
         AtNotificationCountPositionX, AtNotificationCountPositionY } from './notifications.module';
import { By } from '@angular/platform-browser';

describe('Component: NotificationCount', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AtNotificationCountBasicTestComponent,
        AtNotificationCountContentTestComponent,
        AtNotificationCountPositionTestComponent,
        AtNotificationCountPositionContentTestComponent,
      ],
      imports: [
        MatIconModule,
        CovalentNotificationsModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render component with no notification tip',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountBasicTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.at-notification-content'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.at-notification-no-count'))).toBeFalsy();
      });
  })));

  it('should render component notification tip with no count nor number',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountBasicTestComponent);
      let component: AtNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-no-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))
               .nativeElement.textContent.trim()).toBeFalsy();
      });
  })));

  it('should render component notification tip with count and number',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountBasicTestComponent);
      let component: AtNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 44;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))
               .nativeElement.textContent.trim()).toContain(component.notifications);
      });
  })));

  it('should render component with notification tip hidden',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountBasicTestComponent);
      let component: AtNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 0;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.at-notification-no-count'))).toBeFalsy();
      });
  })));

  it('should render component with notification tip and then hide it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountBasicTestComponent);
      let component: AtNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))).toBeTruthy();
        component.notifications = false;
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('.at-notification-count'))).toBeFalsy();
        });
      });
  })));

  it('should render component notification tip with count and 99+',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountBasicTestComponent);
      let component: AtNotificationCountBasicTestComponent = fixture.debugElement.componentInstance;
      component.notifications = 100;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-no-count'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.at-notification-count'))
               .nativeElement.textContent.trim()).toContain('99+');
      });
  })));

  it('should render component with content transcluded',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountContentTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.at-notification-content'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-icon'))).toBeTruthy();
      });
  })));

  it('should render component with content and default positionY top and position X after',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountPositionContentTestComponent);
      let component: AtNotificationCountPositionContentTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.at-notification-top'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-after'))).toBeTruthy();
      });
  })));

  it('should render component with no content and default positionY top and position X after',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountPositionTestComponent);
      let component: AtNotificationCountPositionTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.at-notification-center-x'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-center-y'))).toBeTruthy();
      });
  })));

  it('should render component with positionY bottom and position X before',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AtNotificationCountPositionTestComponent);
      let component: AtNotificationCountPositionTestComponent = fixture.debugElement.componentInstance;
      component.notifications = true;
      component.positionX = AtNotificationCountPositionX.Before;
      component.positionY = AtNotificationCountPositionY.Bottom;
      fixture.detectChanges();
      fixture.whenStable().then(() => {

        expect(fixture.debugElement.query(By.css('.at-notification-before'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.at-notification-bottom'))).toBeTruthy();
      });
  })));

});

@Component({
  selector: 'at-notification-count-basic-test',
  template: `
  <at-notification-count color="color" [notifications]="notifications">

  </at-notification-count>
  `,
})
class AtNotificationCountBasicTestComponent {

  color: string;
  notifications: any;

}

@Component({
  selector: 'at-notification-count-content-test',
  template: `
  <at-notification-count>
    <mat-icon>notifications</mat-icon>
  </at-notification-count>
  `,
})
class AtNotificationCountContentTestComponent {}

@Component({
  selector: 'at-notification-count-position-test',
  template: `
  <at-notification-count [positionX]="positionX" [positionY]="positionY" [notifications]="notifications">

  </at-notification-count>
  `,
})
class AtNotificationCountPositionTestComponent {

  positionX: AtNotificationCountPositionX | string;
  positionY: AtNotificationCountPositionY | string;
  notifications: any;

}

@Component({
  selector: 'at-notification-count-position-content-test',
  template: `
  <at-notification-count [positionX]="positionX" [positionY]="positionY" [notifications]="notifications">
    <mat-icon>notifications</mat-icon>
  </at-notification-count>
  `,
})
class AtNotificationCountPositionContentTestComponent {

  positionX: AtNotificationCountPositionX | string;
  positionY: AtNotificationCountPositionY | string;
  notifications: any;

}
