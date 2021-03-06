import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { MndlGaemComponent } from './game/component/mndl-gaem.component';

// services
import { TreeService } from './game/shared/tree.service';
import { SocketService } from './shared/services/socket.service';
import { MndlGaemService } from './game/service/mndl-gaem.service';

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
  providers: [TreeService, SocketService, MndlGaemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
