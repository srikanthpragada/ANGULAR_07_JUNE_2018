import { FormGroup, FormControl, Validators} from '@angular/forms';

export class MyValidators {

    static mustHaveDot(control : FormControl) 
    {
       // if no data is present then valid 
       if(control.value == "")
          return null;  // No error 

       // data is present but no * is present then error    
       if (control.value.indexOf(".") >= 0)
         return null;  // valid so return null 
       else
         return { mustHaveDot : true}; // invalid so return an object 
    }
}