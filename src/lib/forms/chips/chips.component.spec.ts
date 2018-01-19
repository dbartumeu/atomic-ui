import {
  TestBed,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, DebugElement } from '@angular/core';
import {
  FormControl, FormsModule, ReactiveFormsModule,
} from '@angular/forms';

import { DELETE, BACKSPACE, ENTER, LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatChip } from '@angular/material/chips';
import { By } from '@angular/platform-browser';
import { CovalentChipsModule, AtChipsComponent } from './chips.module';

function createFakeKeyboardEvent(keyCode: number): any {
  return {
    keyCode: keyCode,
    preventDefault: function(): void {
      /* noop */
    },
    stopPropagation: function(): void {
      /* noop */
    },
  };
}

describe('Component: Chips', () => {
  let overlayContainerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentChipsModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      declarations: [
        AtChipsTestComponent,
        AtChipsA11yTestComponent,
        AtChipsBasicTestComponent,
        AtChipsObjectsRequireMatchTestComponent,
        AtChipsStackedTestComponent,
        AtChipsBeforeAfterTestComponent,
        AtChipRemovalTestComponent,
        AtChipsEventsTestComponent,
      ],
      providers: [
        {provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div') as HTMLElement;
          overlayContainerElement.classList.add('cdk-overlay-container');

          document.body.appendChild(overlayContainerElement);

          // remove body padding to keep consistent cross-browser
          document.body.style.padding = '0';
          document.body.style.margin = '0';

          return {getContainerElement: () => overlayContainerElement};
        }},
      ],
    });
    TestBed.compileComponents();
  }));

  describe('should test general features: ', () => {
    let fixture: ComponentFixture<AtChipsTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should have primary color', (done: DoneFn) => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.nativeElement).classList.contains('mat-primary')).toBeTruthy();
        done();
      });
    });

    it('should set to accent color', (done: DoneFn) => {
      fixture.componentInstance.color = 'accent';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.nativeElement).classList.contains('mat-accent')).toBeTruthy();
        done();
      });
    });

    it('should set to warn color and then to accent', (done: DoneFn) => {
      fixture.componentInstance.color = 'warn';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.nativeElement).classList.contains('mat-warn')).toBeTruthy();
        fixture.componentInstance.color = 'accent';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>chips.nativeElement).classList.contains('mat-accent')).toBeTruthy();
          done();
        });
      });
    });

  });

  describe('a11y keyboard in chips and input: ', () => {
    let fixture: ComponentFixture<AtChipsA11yTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsA11yTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should focus input', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<AtChipsComponent>chips.componentInstance)._inputChild.focused).toBeTruthy();
          done();
        });
      });
    });

    it('should focus first chip', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            done();
          });
        });
      });
    });

    it('should focus around the chips going left', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[2]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[1]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

    it('should focus around the chips going right', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[1]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[2]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

  });

  describe('panel usage and add/removal: ', () => {
    let fixture: ComponentFixture<AtChipsBasicTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsBasicTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should set a value in the input and enter it as chip', (done: DoneFn) => {
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        (<AtChipsComponent>chips.componentInstance)._inputChild.value = 'test';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          input.triggerEventHandler('keyup.enter', createFakeKeyboardEvent(ENTER));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            // set tiemout
            setTimeout(() => {
              expect(chips.componentInstance.value.length).toBe(1);
              expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement.textContent).toContain('test');
              done();
            }, 200);
          });
        });
      });
    });

    it('should open the panel, click on an option and add it as chip', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
          done();
        });
      });
    });

    it('should open the panel, click on an option to add it as chip and remove it with backspace', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
          fixture.debugElement.queryAll(By.directive(MatChip))[0].triggerEventHandler('keydown', createFakeKeyboardEvent(BACKSPACE));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(0);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(0);
            done();
          });
        });
      });
    });

    it('should open the panel, click on an option to add it as chip and remove it by clicking on the remove button', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
          fixture.debugElement.queryAll(By.css('.at-chip-removal'))[0].triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(0);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(0);
            done();
          });
        });
      });
    });

  });

  describe('panel usage and filtering: ', () => {
    let fixture: ComponentFixture<AtChipsBasicTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsBasicTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
    });

    it('should open the panel chips are focused', (done: DoneFn) => {
      expect(overlayContainerElement.textContent).not.toContain('steak');
      expect(overlayContainerElement.textContent).not.toContain('pizza');
      expect(overlayContainerElement.textContent).not.toContain('tacos');
      expect(overlayContainerElement.textContent).not.toContain('sandwich');
      expect(overlayContainerElement.textContent).not.toContain('chips');
      expect(overlayContainerElement.textContent).not.toContain('pasta');
      expect(overlayContainerElement.textContent).not.toContain('sushi');
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.textContent).toContain('steak');
        expect(overlayContainerElement.textContent).toContain('pizza');
        expect(overlayContainerElement.textContent).toContain('tacos');
        expect(overlayContainerElement.textContent).toContain('sandwich');
        expect(overlayContainerElement.textContent).toContain('chips');
        expect(overlayContainerElement.textContent).toContain('pasta');
        expect(overlayContainerElement.textContent).toContain('sushi');
        done();
      });
    });

    it('should open the panel and filter the list', (done: DoneFn) => {
      expect(overlayContainerElement.textContent).not.toContain('steak');
      expect(overlayContainerElement.textContent).not.toContain('pizza');
      expect(overlayContainerElement.textContent).not.toContain('tacos');
      expect(overlayContainerElement.textContent).not.toContain('sandwich');
      expect(overlayContainerElement.textContent).not.toContain('chips');
      expect(overlayContainerElement.textContent).not.toContain('pasta');
      expect(overlayContainerElement.textContent).not.toContain('sushi');
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.textContent).toContain('steak');
        expect(overlayContainerElement.textContent).toContain('pizza');
        expect(overlayContainerElement.textContent).toContain('tacos');
        expect(overlayContainerElement.textContent).toContain('sandwich');
        expect(overlayContainerElement.textContent).toContain('chips');
        expect(overlayContainerElement.textContent).toContain('pasta');
        expect(overlayContainerElement.textContent).toContain('sushi');
        (<AtChipsComponent>chips.componentInstance).inputControl.setValue('a');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // mimic debounce
          setTimeout(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(overlayContainerElement.textContent).toContain('steak');
              expect(overlayContainerElement.textContent).toContain('pizza');
              expect(overlayContainerElement.textContent).toContain('tacos');
              expect(overlayContainerElement.textContent).toContain('sandwich');
              expect(overlayContainerElement.textContent).not.toContain('chips');
              expect(overlayContainerElement.textContent).toContain('pasta');
              expect(overlayContainerElement.textContent).not.toContain('sushi');
              done();
            });
          }, 200);
        });
      });
    });
  });

  describe('panel usage and requireMatch usage: ', () => {
    let fixture: ComponentFixture<AtChipsObjectsRequireMatchTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsObjectsRequireMatchTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
    });

    it('should open the panel, click on an option to add it as chip', (done: DoneFn) => {
      fixture.componentInstance.objects = [{
        name: 'San Diego',
      }, {
        name: 'Los Angeles',
      }];
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
          option.click();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(1);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
            done();
          });
        });
      });
    });

  });

  describe('stacked usage: ', () => {
    let fixture: ComponentFixture<AtChipsStackedTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsStackedTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
    });

    it('should rendered chips stacked', (done: DoneFn) => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.query(By.css('.at-chips-wrapper')).nativeElement).classList.contains('at-chips-stacked'))
          .toBeFalsy();
        fixture.componentInstance.stacked = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>chips.query(By.css('.at-chips-wrapper')).nativeElement).classList.contains('at-chips-stacked'))
            .toBeTruthy();
          done();
        });
      });
    });

  });

  describe('position usage: ', () => {
    let fixture: ComponentFixture<AtChipsBeforeAfterTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsBeforeAfterTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
    });

    it('should rendered input before the list of chips at all times', (done: DoneFn) => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        
        expect((<HTMLElement>chips.query(By.css('.at-chips-wrapper')).nativeElement).classList.contains('at-chips-input-before-position'))
          .toBeFalsy();
        fixture.componentInstance.position = 'before';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>chips.query(By.css('.at-chips-wrapper')).nativeElement).classList.contains('at-chips-input-before-position'))
            .toBeTruthy();
          done();
        });
      });
    });
  });

  describe('events: ', () => {
    let fixture: ComponentFixture<AtChipsEventsTestComponent>;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipsEventsTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
    });

    it('should right arrow on a chip and see the chipFocus event', (done: DoneFn) => {
        let focusEventSpy: jasmine.Spy = spyOn(fixture.componentInstance, 'chipFocusEvent');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(focusEventSpy.calls.count()).toBe(0);
          chips.nativeElement.focus();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            chips.triggerEventHandler('focus', new Event('focus'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(MatChip))[0]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(focusEventSpy.calls.count()).toBe(1);
                done();
              });
            });
          });
        });
    });

    it('should right arrow on a chip twice and see the chipBlur event', (done: DoneFn) => {
        let blurEventSpy: jasmine.Spy = spyOn(fixture.componentInstance, 'chipBlurEvent');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(blurEventSpy.calls.count()).toBe(0);
          chips.nativeElement.focus();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            chips.triggerEventHandler('focus', new Event('focus'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(MatChip))[0]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                fixture.debugElement.queryAll(By.directive(MatChip))[1]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(blurEventSpy.calls.count()).toBe(1);
                  done();
                });
              });
            });
          });
        });
    });

  });

  describe('chip removal usage, requires disabled to be false: ', () => {
    let fixture: ComponentFixture<AtChipRemovalTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AtChipRemovalTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(AtChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should not focus input', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<AtChipsComponent>chips.componentInstance)._inputChild.focused).toBeFalsy();
          done();
        });
      });
    });

    it('should not show cancel button', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = false;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.queryAll(By.css('.at-chip-removal')).length).toBe(0);
          done();
        });
      });
    });

    it('should focus input, then focus first chip and remove first chip by clicking on the remove button', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<AtChipsComponent>chips.componentInstance)._inputChild.focused).toBeTruthy();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(3);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(3);
            fixture.debugElement.queryAll(By.css('.at-chip-removal'))[0]
              .triggerEventHandler('click', new Event('click'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(chips.componentInstance.value.length).toBe(2);
              expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(2);
              done();
            });
          });
        });
      });
    });

    it('should focus first chip and remove chip with backspace and delete', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(MatChip))[0]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(BACKSPACE));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(chips.componentInstance.value.length).toBe(2);
                expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(2);
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(chips.componentInstance.value.length).toBe(2);
                  fixture.debugElement.queryAll(By.directive(MatChip))[0]
                    .triggerEventHandler('keydown', createFakeKeyboardEvent(DELETE));
                  fixture.detectChanges();
                  fixture.whenStable().then(() => {
                    expect(chips.componentInstance.value.length).toBe(1);
                    expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
                    done();
                  });
                });
              });
            });
          });
        });
      });
    });
    
    it('should focus around the chips going left', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[2]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[1]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

    it('should focus around the chips going right', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[1]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[2]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

  });

  // TODO

  // more requireMatch usage

  // more a11y unit tests

  // disabled usage

  // chipAddition usage

  // add event test

  // remove event test

  // required reactive forms (dirty, pristine, valid)

});

@Component({
  template: `
      <at-chips [items]="items" [(ngModel)]="selectedItems" [color]="color">
      </at-chips>`,
})
class AtChipsTestComponent {
  color: string;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
  ];
  selectedItems: string[] = this.items.slice(0, 2);
}

@Component({
  template: `
      <at-chips [items]="items" [(ngModel)]="selectedItems" [chipAddition]="chipAddition">
      </at-chips>`,
})
class AtChipsA11yTestComponent {
  chipAddition: boolean = true;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  selectedItems: string[] = this.items.slice(0, 3);
}

@Component({
  template: `
      <at-chips [placeholder]="placeholder" [items]="filteredItems" [(ngModel)]="selectedItems" (inputChange)="filter($event)">
      </at-chips>`,
})
class AtChipsBasicTestComponent {
  placeholder: string;
  filteredItems: string[];
  selectedItems: string[] = [];
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  filter(value: string): void {
    this.filteredItems = this.items.filter((item: any) => {
      return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
    }).filter((filteredItem: any) => {
      return this.selectedItems ? this.selectedItems.indexOf(filteredItem) < 0 : true;
    });
  }
}

@Component({
  template: `
      <at-chips [items]="objects" [(ngModel)]="selectedObjects" requireMatch>
        <ng-template at-chip let-chip="chip">
          {{chip.name}}
        </ng-template>
        <ng-template at-autocomplete-option let-option="option">
          {{option.name}}
        </ng-template>
      </at-chips>`,
})
class AtChipsObjectsRequireMatchTestComponent {
  selectedObjects: any[] = [];
  objects: any[];
}

@Component({
  template: `
      <at-chips [items]="items" [(ngModel)]="selectedItems" [stacked]="stacked">
      </at-chips>`,
})
class AtChipsStackedTestComponent {
  stacked: boolean = false;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  selectedItems: string[] = this.items.slice(0, 3);
}

@Component({
  template: `
      <at-chips [items]="items" [(ngModel)]="selectedItems" [stacked]="stacked" [inputPosition]="position">
      </at-chips>`,
})
class AtChipsBeforeAfterTestComponent {
  position: string = 'after';
  stacked: boolean = false;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  selectedItems: string[] = this.items.slice(0, 3);
}

@Component({
  template: `
      <at-chips [items]="items" [(ngModel)]="selectedItems" [chipRemoval]="chipRemoval"
      [chipAddition]="chipAddition">
      </at-chips>`,
})
class AtChipRemovalTestComponent {
  chipRemoval: boolean = true;
  chipAddition: boolean = true;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  selectedItems: string[] = this.items.slice(0, 3);
}

@Component({
  template: `
      <at-chips [items]="items" [(ngModel)]="selectedItems" (chipFocus)="chipFocusEvent()" (chipBlur)="chipBlurEvent()">
      </at-chips>`,
})
class AtChipsEventsTestComponent {
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
  ];
  selectedItems: string[] = this.items.slice(0, 2);

  chipFocusEvent(): void {
    /* noop */
  }

  chipBlurEvent(): void {
    /* noop */
  }
}
