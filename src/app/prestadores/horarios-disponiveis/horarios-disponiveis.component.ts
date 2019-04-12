import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-horarios-disponiveis',
  templateUrl: './horarios-disponiveis.component.html',
  styleUrls: ['./horarios-disponiveis.component.css']
})
export class HorariosDisponiveisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#datepicker').datepicker({});
    });
  }
}
