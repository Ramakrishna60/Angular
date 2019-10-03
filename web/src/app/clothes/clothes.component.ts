
import { Component} from '@angular/core';
import { Storing } from '../service/storing.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {

  constructor(private values:Storing) {
           
   }

   passdata(shoe){
     this.values.items.push(shoe);
     this.cart=this.values.items;
   }
   cart=[ ];
   shoes=[
     {
       "name":'Chinese collar' ,
       image :"assets/clothes.jpg",
       price:1000
     },
     {
      name:"Teashirts",
      image :"assets/clothes1.jpg",
      price:1250

      },
      {
        name:"Jeans",
        image :"assets/clothes2.jpg",
        price:1540
        },
        {
          name:"Shorts",
          image :"assets/clothes3.jpg",
          price:850
          }
   ]

    
   remove(shoe){
      this.cart.slice(shoe);
    }

//   remove(shoe){
//   console.log(shoe)
//   for(var i=0;i<this.cart.length;i++){
//     if(this.shoes[i]["image"]== name){
//       this.shoes.slice(i,1);
//     }
//   }
     
//  }
}
