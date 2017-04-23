import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { FellCanvasComponent } from './fell/fell-canvas/fell-canvas.component';

// services
import { TreeService } from './fell/shared/tree.service';

@NgModule({
  declarations: [
    AppComponent,
    FellCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
