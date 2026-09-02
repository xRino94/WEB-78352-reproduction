import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World</h1>`,
})
export class AppComponent {}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
