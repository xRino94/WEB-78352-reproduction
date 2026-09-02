import {Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css',
  imports: [FormsModule]
})
export class TestComponentComponent {
  readonly testValue = signal("test");
}
