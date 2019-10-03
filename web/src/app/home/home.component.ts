import { Component, OnInit } from '@angular/core';
import { Storing } from '../service/storing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
  }
arrray=[];
constructor(private obj:Storing){
this.arrray=this.obj.items;
}
remove(i){
  this.obj.items.splice(i,1);
  console.log(i)
}
}
