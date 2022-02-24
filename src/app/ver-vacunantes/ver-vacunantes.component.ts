import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ver-vacunantes',
  templateUrl: './ver-vacunantes.component.html',
  styleUrls: ['./ver-vacunantes.component.css']
})
export class VerVacunantesComponent implements OnInit {

  posts: any;

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }

  Borrar(id: any){
    console.log(id)
    this.dataService.BorrarData(id);
  }

  ngOnInit(): void {
  }

}
