import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ FormsModule } from '@angular/forms';
import{ HttpModule } from '@angular/http';


export const fireconfig = {
  production: false,
  firebase:{
      apiKey: "AIzaSyAyBMdGSpH6FqpZgLwxEACDfMPj7lzjvwM",
      authDomain: "chatapp-d4224.firebaseapp.com",
      databaseURL: "https://chatapp-d4224.firebaseio.com",
      projectId: "chatapp-d4224",
      storageBucket: "chatapp-d4224.appspot.com",
      messagingSenderId: "463697303554"
  }
    };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireconfig.firebase),
    AngularFireDatabaseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
