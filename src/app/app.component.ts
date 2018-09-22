import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myProp:String='Go ahead ,click that button';
  myArr=[
    {'title':'My blog title','desc':'My blog description'},
    {'title':'My blog title','desc':'My blog description'},
    {'title':'My blog title','desc':'My blog description'},

  ];
  myMethod(){
    this.myProp='The button above me was clicked';
  }
}
