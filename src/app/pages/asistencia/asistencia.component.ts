import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css'],
})
export class AsistenciaComponent implements OnInit {

  tablaDatos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadCSVData();
  }

  loadCSVData() {
    this.http.get('assets/csv/ListaAsistencia.csv', { responseType: 'text' })
      .subscribe(data => {
        const csvToRows = data.split('\n');
        const rows = csvToRows.slice(1); // Ignorar la primera fila (encabezados)
        this.tablaDatos = rows.map(row => {
          const columns = row.split(',');
          return {
            usuario: columns[0],
            fechaAsistencia: columns[1]
          };
        });
      });
  }

  
}
