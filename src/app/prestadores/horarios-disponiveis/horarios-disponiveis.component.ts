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
    // this.montaCalendario();
    this.horariosDisponiveisService.consultarHorarios().subscribe((horarios: any) => {
      this.horariosDisponiveis = horarios;
      const datasDisponiveis: Array<Horarios> = [];
      let novaData: Horarios;

      this.horariosDisponiveis.forEach(element => {

        //console.log('proxima data' + element.Data);

        //console.log(element.HoraInicio);

        // element.Data;
        // element.HoraInicio;

        novaData = new Horarios;

        if (datasDisponiveis.length === 0) {
          novaData.data = element.Data;
          novaData.horarios = [];
          novaData.horarios.push(element.HoraInicio);
          datasDisponiveis.push(novaData);
          console.log('add data inicial  ' + datasDisponiveis.length);

        } else {
            console.log('reiniciei for  ' + datasDisponiveis.length);
            datasDisponiveis.forEach(data => {
            console.log('For - ' + data.data);
            console.log('Element => - ' + element.Data);
            if (data.data === element.Data) {
                console.log('mesma data incluir só horario - ' + element.Data);
                data.horarios.push(element.HoraInicio);
            } else {
              console.log('data diferente incluir data e horario - ' + element.Data);
              novaData = new Horarios;
              novaData.data = element.Data;
              novaData.horarios = [];
              novaData.horarios.push(element.HoraInicio);

            }
          });
          datasDisponiveis.push(novaData);
        }
      });
    });


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
