import { Component} from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent  {

  list=""
  todo=[];

  addText(list){
    console.log(list); 
    this.todo.push(this.list);
  }

}
