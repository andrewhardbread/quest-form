import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quest-form';
  form: FormGroup;
  message: string = '';

  private answers: { [team: string]: string } = {
    'sampi' : '5-1-6-3-8-4-9-14-7-2',
    'ouk': '2-11-9-5-1-6-18-3-13-4',
    'izhica': '8-12-17-18-13-11-4-2-10-6',
    'zelo': '18-5-16-4-15-3-12-10-1-14'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      teamName: ['', Validators.required],
      code: ['', Validators.required]
    })
  }

  submit(): void {
    if (this.form.value.code.trim() === this.answers[this.form.value.teamName]) {
      this.message = 'Ответ: Этот ключ от кладовой №207. Поспешите!';
      return;
    }
    this.message = 'Ответ неверный!';
  }
}
