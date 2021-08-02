import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './myComponents/todo/todo.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { ChildLifecycleHooksComponent } from './child-lifecycle-hooks/child-lifecycle-hooks.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { RendererDirective } from './renderer.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ChildComponentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    ChildLifecycleHooksComponent,
    CustomDirectiveDirective,
    RendererDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
