import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
   
  @Input() persona;

  
  constructor() { }

  ngOnInit() {
  }

}
