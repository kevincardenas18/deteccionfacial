import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }

  public downloadLog(): void {
    this.logService.downloadLog();
  }

}
