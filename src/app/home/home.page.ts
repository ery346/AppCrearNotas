import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlmacenService } from './service/almacen.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private service: AlmacenService) {}
  


  ngOnInit(): void {

    
  }

}
