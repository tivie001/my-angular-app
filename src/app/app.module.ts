import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SuccessAlertComp } from './docs/basics/assign1/success-alert-comp';
import { WarningAlertComp } from './docs/basics/assign1/warning-alert-comp';
import { DataBindingComp } from './docs/basics/assign2/databind-comp';
import { StringInterComp } from './docs/basics/lessons/sec2/string-inter-comp';
import { BindComp } from './docs/basics/lessons/sec2/binding-comp';
import { DirectiveComp } from './docs/basics/lessons/sec2/directive-comp';
import { DirectivesComp } from './docs/basics/assign3/directives-comp';



@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComp,
    WarningAlertComp,
    DataBindingComp,
    StringInterComp,
    BindComp,
    DirectiveComp,
    DirectivesComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
