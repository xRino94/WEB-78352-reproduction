import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {TestComponentComponent} from "./app/test-component/test-component.component";

@Component({
  selector: 'app-root',
  template: `<h1>Hello World</h1>
  <app-test-component />`,
  imports: [
    TestComponentComponent
  ]
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
