import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-newslette',
  templateUrl: './form-newslette.component.html',
  styleUrls: ['./form-newslette.component.css']
})
export class FormNewsletteComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      localStorage.setItem('contactFormData', JSON.stringify(this.contactForm.value));
    }
  }
  clearForm() {
    this.contactForm.reset();
  }
}
