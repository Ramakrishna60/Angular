import { Component } from '@angular/core';
import { FirstService } from './shared/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'rama';
  username:string = 'raja-parent';
  childdata
  parentmethod(data){
    this.childdata=data
    }



    today
   constructor(private myservice:FirstService) {}
   ngOnInit() {
      this.today = this.myservice.showToday();
    // constructor(private first: FirstService) {
    //   this.first.printname();
  
}
}
