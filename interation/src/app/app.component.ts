import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{



  constructor() {
    console.log("call from constructor");
  }

  ngOnInit() {
    console.log("ngOnInit is called");
  }
  ngAfterViewInit(){
    console.log("AfterViewInit");
  }
  ngOnChanges(changes:SimpleChanges){
  console.log(changes);
}

  public name="SIVA";
  // public message="";
  x:any;
  parentEvent(event){
    console.log(event);
    this.x=event;
    
  }
  
}