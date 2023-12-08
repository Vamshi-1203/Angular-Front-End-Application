import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty initial fullName, email, password, and confirmPassword', () => {
    expect(component.fullName).toBe('');
    expect(component.email).toBe('');
    expect(component.password).toBe('');
    expect(component.confirmPassword).toBe('');
  });

  it('should update fullName and email on input change', () => {
    const fullNameInput = fixture.nativeElement.querySelector('input[name="Fullname"]');
    const emailInput = fixture.nativeElement.querySelector('input[name="email"]');

    fullNameInput.value = 'John Doe';
    emailInput.value = 'john@example.com';

    fullNameInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.fullName).toBe('John Doe');
    expect(component.email).toBe('john@example.com');
  });

  it('should display an error message if errorMsg is set', () => {
    component.errorMsg = 'Invalid input';
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector('.error');
    expect(errorElement.textContent).toContain('Invalid input');
  });

  it('should update password and confirmPassword on input change', () => {
    const passwordInput = fixture.nativeElement.querySelector('input[name="password"]');
    const confirmPasswordInput = fixture.nativeElement.querySelector('input[name="confirmpassword"]');

    passwordInput.value = 'testpassword';
    confirmPasswordInput.value = 'testpassword';

    passwordInput.dispatchEvent(new Event('input'));
    confirmPasswordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.password).toBe('testpassword');
    expect(component.confirmPassword).toBe('testpassword');
  });

  it('should call signup() method when the "Sign Up" button is clicked', () => {
    spyOn(component, 'signup');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.signup).toHaveBeenCalled();
  });
  
});
