import { Component } from '@angular/core';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  object1 = new RecordService();

  submit(login) {
    console.log('form submit');
    console.log(login);
  }

  test(value) {
    console.log(value);
  }
}
