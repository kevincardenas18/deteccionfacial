import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { formatDate } from '@angular/common';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-deteccion',
  templateUrl: './deteccion.component.html',
  styleUrls: ['./deteccion.component.css']
})
export class DeteccionComponent implements OnInit {

  idImagen:any;
  imagenData:any;
  imgNombre:any;
  imgFoto:any;

  constructor(private imagenesSvc:ImagenesService, private logService: LogService) { }

  ngOnInit() {

    this.obtenerImg();

    setTimeout(() => {
      this.redirigir();
    }, 5000);

  }


  obtenerImg(){

    this.idImagen = localStorage.getItem('id');
    this.imagenesSvc.getImagen(this.idImagen).subscribe(res=>{

        this.imagenData = res;

        this.imgNombre = this.imagenData.nombreImagen;
        this.imgFoto = this.imagenData.imgUrl;
     

    })

  }

  volver(){
    const fechaActual = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
    const logMensaje = `El usuario '${this.imgNombre}' asistió el día ${fechaActual}.`;

    // Aquí puedes hacer lo que quieras con el mensaje del log, como enviarlo a un servicio de registro de logs
    this.logService.log(logMensaje);
    localStorage.removeItem('id');
    //location.href = '/identificar';

  }

  redirigir() {
    // Aquí debes especificar la ruta a la que deseas redirigir
    this.volver();
    //this.downloadLog();
    location.href = '/identificar';
  }

  public downloadLog(): void {
    const logMessages = this.logService.getLogMessages();
    const logData = logMessages.join('\n');
    const blob = new Blob([logData], { type: 'text/plain' });

    // Crear un enlace de descarga
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'log.txt';

    // Simular el clic en el enlace para iniciar la descarga
    downloadLink.click();
  }

}
