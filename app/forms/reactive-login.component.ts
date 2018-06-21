import { Component } from '@angular/core';
import { MyValidators} from './MyValidators'
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'st-login',
  templateUrl: 'reactive-login.component.html'
})
export class ReactiveLoginComponent {
    username : FormControl;
    password : FormControl;
    loginForm : FormGroup;
    
    // FormControl validator 
    // Returns null if data is valid otherwise object 
    mustHaveStar(control : FormControl) 
    {
       // if no data is present then valid 
       if(control.value == "")
          return null;  // No error 

       // data is present but no * is present then error    
       if (control.value.indexOf("*") >= 0)
         return null;  // valid so return null 
       else
         return { mustHaveStar : true, currentValue : control.value }; // invalid so return an object 
    }
    // FormGroup validator to ensure password is not same as username 
    matchUsernamePassword(g : FormGroup) {
      if (g.get("username").invalid || g.controls.password.invalid)
           return null;

      if (g.get('username').value != g.get('password').value)
         return null;
       else
         return  { match : true };
    }

    ngOnInit() { 
       this.username = new FormControl("", 
                    [Validators.required,
                     Validators.pattern("[a-zA-Z*]+")
                    ]) ;
       this.password = new FormControl("",
                    [
                      Validators.required,
                      // MyValidators.mustHaveDot,
                      this.mustHaveStar     // custom validation
                    ]);

       this.loginForm = new FormGroup(
         { 
            username : this.username,
            password : this.password
         },
         this.matchUsernamePassword   // custom validation
       );
    }

   login() {
     if (this.loginForm.valid) {
            // process 
            console.log(this.username.value);
            console.log(this.loginForm.controls.username.value);
            console.log(this.password.value);
     }
     else {
         console.log("Form     Errors : " + this.loginForm.errors)
         console.log("Username Errors : " + this.username.errors)
         console.log("Passwrod Errors : " + this.password.errors)
     }

     console.log( this.username);
     console.log( this.password);
     console.log( this.loginForm);
   }
   

}
