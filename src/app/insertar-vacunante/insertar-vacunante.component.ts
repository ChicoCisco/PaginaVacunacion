import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-insertar-vacunante',
  templateUrl: './insertar-vacunante.component.html',
  styleUrls: ['./insertar-vacunante.component.css']
})
export class InsertarVacunanteComponent implements OnInit {

  title = 'Insertar Vacunante';

  form: FormGroup = new FormGroup({
    CURP: new FormControl(''),
    NombreCompleto: new FormControl(''),
    Edad: new FormControl(''),
    Email: new FormControl(''),
    Direccion: new FormControl(''),
    Telefono: new FormControl('')
  })

  submitted=false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      CURP: ['', [
        Validators.required,
        Validators.minLength(17),
        Validators.maxLength(19)
      ]],
      NombreCompleto: ['', Validators.required],
      Edad: ['', Validators.required],
      Email: ['', Validators.email],
      Direccion: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(70)
      ]],
      Telefono: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12)
      ]]
    });
  }

  get f(): { [key: string]: AbstractControl}{return this.form.controls;}

  onSubmit(): void{
    this.submitted = true;
    if(this.form.invalid)
    {
      return console.log("error")
    }

    const Data = {
      'CURP': this.f['CURP'].value,
      'NombreCompleto': this.f['NombreCompleto'].value,
      'Edad': this.f['Edad'].value,
      'Email': this.f['Email'].value,
      'Direccion': this.f['Direccion'].value,
      'Telefono': this.f['Telefono'].value
    }

    axios.post('http://127.0.0.5:3333/api/insertarPersona', Data).then((response)=> console.log("todo cool")).catch((error)=> console.log("todo mal"))

    console.log(JSON.stringify(this.form.value, null, 2))

    this.submitted=false;
    this.form.reset();
  }

  onReset(): void{
    this.submitted=false;
    this.form.reset();
  }

}
