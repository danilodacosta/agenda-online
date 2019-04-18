import { Horarios } from './../../shared/horarios.model';
import { HorariosDisponiveisService } from './../../horariosDiponiveis.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-horarios-disponiveis',
  templateUrl: './horarios-disponiveis.component.html',
  styleUrls: ['./horarios-disponiveis.component.css'],
  providers: [HorariosDisponiveisService]
})
export class HorariosDisponiveisComponent implements OnInit {

  constructor(private horariosDisponiveisService: HorariosDisponiveisService) { }

  public horariosDisponiveis: Array<any>;
  public horarios: Array<Horarios>;
  ngOnInit() {
    this.montaCalendario();
    this.horariosDisponiveisService.consultarHorarios().subscribe((horarios: any) => {
      this.horariosDisponiveis = horarios;

      Array.for(this.horariosDisponiveis => {

      });


    });
    // console.log(this.horariosDisponiveis);
  }

  private montaCalendario(): void {
    const datasDisponiveis = ['11-04-2019', '12-04-2019', '15-04-2019', '15-05-2019', '13-04-2019'];

    $('#datepicker').datepicker({
      closeText: 'Fechar',
      prevText: '< Anterior',
      nextText: 'Próximo >',
      currentText: 'Hoje',
monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dateFormat: 'dd-mm-yy',
      minDate: new Date(),
      maxDate: '15-05-2019',
      beforeShowDay: function (d) {
        const year = d.getFullYear(), month = ('0' + (d.getMonth() + 1)).slice(-2), day = ('0' + (d.getDate())).slice(-2);
        const formatted = day + '-' + month + '-' + year;

        if ($.inArray(formatted, datasDisponiveis) !== -1) {
          return [true, '', 'Disponivel'];
        } else {
          return [false, '', 'unAvailable'];
        }
      },
      onSelect: function (date, inst) {
        alert('Data selecionada:' + date);
      }
    });
  }
}
