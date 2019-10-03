import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatButtonModule,MatIconModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { ShoeComponent } from './shoe/shoe.component';
import { ClothesComponent } from './clothes/clothes.component';
import  { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Storing } from './service/storing.service';
const routes:Routes=[{path:'shoe',component:ShoeComponent},
                    {path:'clothes',component:ClothesComponent},
                    {path:'home',component:HomeComponent},
];
                    

 @NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    ShoeComponent,
    ClothesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatButtonModule,MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Storing],
  bootstrap: [AppComponent]
})
export class AppModule { }







