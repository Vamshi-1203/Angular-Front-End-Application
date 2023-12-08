import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LemonComponent } from './lemon.component';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';

describe('LemonComponent', () => {
  let fixture: ComponentFixture<LemonComponent>;
  let component: LemonComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LemonComponent],
      imports: [AppModule, FormsModule],
    });

    fixture = TestBed.createComponent(LemonComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should have the correct title', () => {
    const titleElement = debugElement.query(By.css('h4'));
    expect(titleElement.nativeElement.textContent).toBe('Lemon');
  });
  
  it('should trigger the displayAlert method when Add to Cart button is clicked', () => {
    const addCartButton = debugElement.query(By.css('.normal button'));
    const spy = spyOn(component, 'displayAlert');

    addCartButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('Added to Cart');
  });

  it('should trigger the displayAlert method when Buy Now button is clicked', () => {
    const buyNowButton = debugElement.query(By.css('.nor button'));
    const spy = spyOn(component, 'displayAlert');

    buyNowButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('Placing order');
  });
});
