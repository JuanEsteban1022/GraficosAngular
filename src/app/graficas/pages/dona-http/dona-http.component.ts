import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Gráfica Dona
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // Eventos
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // Metodo 1:
    // this.graficasService.getDataGrafica()
    //   .subscribe(data => {
    //     // almacena un arreglo de labels
    //     const valores = Object.values(data);
    //     console.log(valores);
    //     this.doughnutChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{ data: Object.values(data), backgroundColor: ['#21732C', '#90F49E', '#46F25D', '#44734A', '#37BF4A'] }]
    //     }
    //   })

    // Metodo 2:
    this.graficasService.getDataRedesSociales()
      .subscribe(({ labels, valores }) => {
        this.doughnutChartData = {
          labels: labels,
          datasets: [{ data: Object.values(valores), backgroundColor: ['#3CF9C0', '#35DB7A', '#46F25D', '#53DB35', '#A1F93C'] }]
        }
      });
  }

}
