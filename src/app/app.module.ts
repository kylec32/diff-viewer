import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DiffserviceService } from './services/diffservice.service';
import { FileListComponent } from './file-list/file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DiffserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
