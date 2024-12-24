import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private router: Router) { }
  otp: string = "234561"
  /*     otpFields: string[] = [];*/
  itemid!: number
  errormessages = ""
  // Store OTP values as a string array
  inputMobileNumber1!: string
  inputMobileNumber2!: string
  inputMobileNumber3!: string
  inputMobileNumber4!: string
  inputMobileNumber5!: string
  inputMobileNumber6!: string
  logged: boolean = false;

  errormessage = ""
  handleLogin() {
    let otp: string = '';

    // Check if all fields are filled
    if (!(this.inputMobileNumber1 && this.inputMobileNumber2 && this.inputMobileNumber3 && this.inputMobileNumber4 && this.inputMobileNumber5 && this.inputMobileNumber6)) {
      this.errormessage = "Please enter all OTP fields.";
      console.log("Value error");
    }
    else{
      otp = this.inputMobileNumber1.toString() + this.inputMobileNumber2.toString() + this.inputMobileNumber3.toString() + this.inputMobileNumber4.toString() + this.inputMobileNumber5.toString() + this.inputMobileNumber6.toString();
      console.log("Valid OTP");
      
    }
    // Validate the OTP
    if (otp === this.otp) {
      this.logged = !this.logged;  // Toggle login status
      console.log("Logged");
      this.router.navigate(['/bills'])
      this.clearFields();  // Optionally clear the fields after successful login
    } else {
      this.errormessage = "Invalid OTP. Please try again.";
      console.log("Invalid OTP");
      this.clearFields();  // Clear fields on failed attempt to prevent reuse
    }
  }


  clearFields() {
    this.inputMobileNumber1 = '';
    this.inputMobileNumber2 = '';
    this.inputMobileNumber3 = '';
    this.inputMobileNumber4 = '';
    this.inputMobileNumber5 = '';
    this.inputMobileNumber6 = '';
  }

  valid = false


  MobileNumber(form: NgForm) {
    const inputMobileNumber = document.getElementById('userinput') as HTMLInputElement
    const inputNumber = inputMobileNumber.value;
    console.log("Hi");
    
    if (inputNumber.length < 10) {
      this.valid = true
      this.errormessages = "enter 10 digit number"
      console.log("Error");
    }
    else {
      this.valid = true
      alert("  OTP 2 3 4 5 6 1");
      console.log(form)
    }

  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log('OTP is valid:', this.otp);
    } else {
      console.log('Form is invalid');
    }
  }
  onOtpInput(event: any, nextInput: string) {

    if (event.target.value.length === 1) {
      const nextElement = document.getElementById(nextInput) as HTMLInputElement;
      if (nextElement) {
        nextElement.focus();
      }
    }


  }
}

