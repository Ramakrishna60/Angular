import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule} from '@angular/forms';
// import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstDirective} from './shared/first.directive';
import {FirstService} from './shared/first.service';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FormsModule,
    ParentComponent,
    ChildComponent,
    FirstDirective,
    // FirstService
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
