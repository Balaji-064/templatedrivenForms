import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private router : Router){}
  otp: string = "234561"
  /*     otpFields: string[] = [];*/
  errormessage = ""
  // Store OTP values as a string array
  inputMobileNumber1!: string
  inputMobileNumber2!: string
  inputMobileNumber3!: string
  inputMobileNumber4!: string
  inputMobileNumber5!: string
  inputMobileNumber6!: string
  logged: boolean = false;


  handleLogin() {
    let otp: string = '';
    
    // Check if all fields are filled
    if (!(this.inputMobileNumber1 && this.inputMobileNumber2 && this.inputMobileNumber3 && this.inputMobileNumber4 && this.inputMobileNumber5 && this.inputMobileNumber6)) {
      this.errormessage = "Please enter all OTP fields.";
      console.log("Value error");
      return
    }
    
    // Concatenate the input fields into one OTP string
    otp = this.inputMobileNumber1.toString() + this.inputMobileNumber2.toString() + this.inputMobileNumber3.toString() + this.inputMobileNumber4.toString() + this.inputMobileNumber5.toString() + this.inputMobileNumber6.toString();
    
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
  
  // Optional: Function to clear the OTP fields
  clearFields() {
    this.inputMobileNumber1 = '';
    this.inputMobileNumber2 = '';
    this.inputMobileNumber3 = '';
    this.inputMobileNumber4 = '';
    this.inputMobileNumber5 = '';
    this.inputMobileNumber6 = '';
  }
  showAlert() {

    alert("  OTP 2 3 4 5 6 1");
  }
  valid = false
  MobileNumber() {
    const inputMobileNumber = document.getElementById('userinput') as HTMLInputElement
    const inputNumber = parseInt(inputMobileNumber.value);
    if (inputNumber.toString().length < 10) {
      this.valid = true
      this.errormessage = "enter 10 digit number"
    }
    else {
      this.valid = false
      this.showAlert()
    }

  }
  onSubmit(form: any) {
  if (form.valid) {
    console.log('OTP is valid:', this.otp);
  } else {
    console.log('Form is invalid');
  }
}


}


