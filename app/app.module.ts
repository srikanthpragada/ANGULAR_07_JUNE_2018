import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConvertService } from './service/convert.service';
import { ConvertComponent } from './service/convert.component';

@NgModule({
  declarations: [
        ConvertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ConvertComponent]
})
export class AppModule { }
