import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular calculator';
  public 'num1':string;
  public 'num2':string;
  public 'num3':number;
  
  add(){
    this.num3=parseInt(this.num1)+parseInt(this.num2);
  }
  sub(){
    this.num3=parseInt(this.num1)-parseInt(this.num2);
  }
  mul(){
    this.num3=parseInt(this.num1)*parseInt(this.num2)
  
  }
  div(){
    
    this.num3=parseInt(this.num1)/parseInt(this.num2)

  }

}
