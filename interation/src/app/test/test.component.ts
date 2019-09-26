import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  
  isdisabled =true;
  
  // @Input() public parentData;
  @Output()  childEvent= new EventEmitter();
  // list=""
 todo=[];

  fireEvent(list){

       this.todo.push(list);
      this.childEvent.emit(this.todo);
      // console.log(list); 
      
      // console.log(this.todo);
  }

}






