import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-test-component-2',
  imports: [
    FormsModule
  ],
  template: '<input [(ngModel)]="testValue2">',
  styleUrl: './test-component-2.component.css'
})
export class TestComponent2Component {
  readonly testValue2 = signal("test2");
}
