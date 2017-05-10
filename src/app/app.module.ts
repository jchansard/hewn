import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { MndlGaemComponent } from './game/mndl-gaem/mndl-gaem.component';

// services
import { TreeService } from './game/shared/tree.service';
import { SocketService } from './shared/services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    MndlGaemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TreeService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
