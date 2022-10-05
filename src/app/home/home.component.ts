import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  validationForm: any;
  dropdownArray = [
    {
      id: 1,
      name: 'Dharmavaram'
    },
    {
      id: 2223,
      name: 'ATP'
    },
    {
      id: 78786,
      name: 'BNG'
    },
    {
      id: 98789,
      name: 'TDP'
    },
  ]
  // validationForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): any {
    this.validationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      place: []
    })
  }

  submitForm(): any {
    console.log(this.validationForm);

  }


  writingEmail(): any {
    console.log(this.validationForm.value.email);

  }

  onselecetDrop():any{
    console.log(this.validationForm.value.place);

  }
}
