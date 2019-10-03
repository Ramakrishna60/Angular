import { Component} from '@angular/core';
import { Storing } from '../service/storing.service';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent {

  constructor(private values:Storing) {
           
   }

   passdata(shoe){
     this.values.items.push(shoe);
     this.cart=this.values.items;
   }
   cart=[ ];
   shoes=[
     {
       "name":'Adidas',
       image :"assets/shoe.jpg",
       price:1850
     },
     {
      name:"Sports",
      image :"assets/shoe1.jpg",
      price:2200
      },
      {
        name:"Nike",
        image :"assets/shoe2.jpg",
        price:2000
        },
        {
          name:"Puma",
          image :"assets/shoe3.jpg",
          price:2500
          }
   ]


  //  arrrr=[];
  
  //  remove(i){
    // this.cart.splice(i,1);
  //  return shoes;

  //  this.values.items.splice(i,1);
  //  this.cart = this.values.items;
  //  }

// remove(shoe){
//   console.log(shoe)
//   for(var i=0;i<this.shoes.length;i++){
//     if(this.shoes[i]["image"]== name){
//       this.shoes.splice(i,1);
//     }
//   }
     
}





