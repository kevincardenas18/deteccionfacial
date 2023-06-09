import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogService {
  private logKey = 'logMessages';

  public log(message: string): void {
    const existingLog = localStorage.getItem(this.logKey) || '';
    const updatedLog = existingLog + message + '\n';
    localStorage.setItem(this.logKey, updatedLog);
  }

  public getLogMessages(): string[] {
    const logData = localStorage.getItem(this.logKey) || '';
    return logData.split('\n').filter((message) => message.trim() !== '');
  }

  public downloadLog(): void {
    const logData = localStorage.getItem(this.logKey) || '';
    const blob = new Blob([logData], { type: 'text/plain' });

    // Crear un enlace de descarga
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'log.txt';

    // Simular el clic en el enlace para iniciar la descarga
    downloadLink.click();
  }

  public static getInstance(): LogService {
    // Obtener una instancia única del servicio de registro
    return new LogService();
  }
}