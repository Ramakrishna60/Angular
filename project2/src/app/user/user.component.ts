import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  list=""
  todo=[];

  addText(list){
    console.log(list); 
    this.todo.push(this.list);
  }

}
