import { Component ,OnInit} from '@angular/core';
//import { interval, Subject } from 'rxjs';
@Component({
  selector: 'app-otp-verification',
  templateUrl:'./otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit{
countDown: any;    
Constructor(){}     
ngOnInit(){

}
  

move(e:any,p:any,c:any,n:any)
{
  var length=c.value.length;
  var maxlength=c.getAttribute('maxlength');
  if(length == maxlength){
    if(n!=""){
      n.focus();
    }
    
  }
  if(e.key==="Backspace"){
    if(p!=""){
    p.focus();
  }
}

  }

}
