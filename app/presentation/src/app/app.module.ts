import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CORE_IOC } from '../di/counter.ioc';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],

  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],

  providers: [...CORE_IOC],

  bootstrap: [AppComponent],
})
export class AppModule {}
