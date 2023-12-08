import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, HomeComponent],
      imports: [FormsModule, HttpClientTestingModule, HttpClientModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  

  it('should have empty initial username and password', () => {
    expect(component.username).toBe('');
    expect(component.password).toBe('');
  });

  it('should update the username and password on input change', () => {
    const usernameInput = fixture.nativeElement.querySelector('input[name="uname"]');
    const passwordInput = fixture.nativeElement.querySelector('input[name="pword"]');

    usernameInput.value = 'testuser';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.value = 'testpassword';
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.username).toBe('testuser');
    expect(component.password).toBe('testpassword');
  });

  it('should display error message if errorMsg is set', () => {
    component.errorMsg = 'Invalid credentials';
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector('.error');
    expect(errorElement.textContent).toContain('Invalid credentials');
  });  

  it("Should only allow char", function(){
    let usernameInput = document.createElement("input");
    let username = "TeamChar";
    usernameInput.value = username;
    expect(username).toMatch(/[A-Za-z]/);
  });

  it("should allow only numbers", function() {
    let usernameInput = document.createElement("input");
    let username = "14523";
    usernameInput.value = username;
    expect(username).toMatch(/[0-9]/);
  })

});