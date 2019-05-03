import { Horarios } from './../../shared/horarios.model';
import { HorariosDisponiveisService } from './../../horariosDiponiveis.service';
import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-horarios-disponiveis',
  templateUrl: './horarios-disponiveis.component.html',
  styleUrls: ['./horarios-disponiveis.component.css'],
  providers: [HorariosDisponiveisService]
})
export class HorariosDisponiveisComponent implements OnInit {

  public horariosDisponiveis: Array<any>;
  public datasDisponiveis: Array<Horarios> = [];

  @Input() public jsonConsulta: any = new Object;

  constructor(private horariosDisponiveisService: HorariosDisponiveisService) { }

  ngOnInit() {
    console.log(this.jsonConsulta);
    // this.montaCalendario();
    this.horariosDisponiveisService.consultarHorarios().subscribe((horarios: any) => {
      this.horariosDisponiveis = horarios;
      this.montaDatasDisponiveis();
      this.montaCalendario();
    });
  }


  private montaDatasDisponiveis(): void {

    let novaData: Horarios;
    this.horariosDisponiveis.forEach(element => {
      const dataExistente = this.datasDisponiveis.find((data) => data.data === element.Data);
      if (dataExistente) {
        dataExistente.horarios.push(element.HoraInicio);
      } else {
        novaData = new Horarios;
        novaData.data = element.Data;
        novaData.horarios = [];
        novaData.horarios.push(element.HoraInicio);
        this.datasDisponiveis.push(novaData);
      }
    });

    console.log(this.datasDisponiveis);

  }

  private montaCalendario(): void {

    const datas: string[] = [];

    this.datasDisponiveis.forEach(data => {
      datas.push(data.data);
    });

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
      minDate: datas[0],
      maxDate: datas[datas.length - 1],
      beforeShowDay: function (d) {
        const year = d.getFullYear(), month = ('0' + (d.getMonth() + 1)).slice(-2), day = ('0' + (d.getDate())).slice(-2);
        const formatted = day + '-' + month + '-' + year;

        if ($.inArray(formatted, datas) !== -1) {
          return [true, '', 'Disponivel'];
        } else {
          return [false, '', 'unAvailable'];
        }
      },
      onSelect: function (date, inst) {

        this.pesquisaHoraios(date);

      }
    });
  }

  private pesquisaHoraios(dataSeleciona: string): void {
    console.log('data selecionada : ' + dataSeleciona);
    //;;const dataExistente = this.datasDisponiveis.find((data) => data.data === date);

    //console.log(dataExistente);
  }

}
