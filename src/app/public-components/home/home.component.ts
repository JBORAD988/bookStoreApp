import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {CounterService} from "../../shared/services/counter.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(public _CounterService:CounterService,
     @Inject('appTitle') public title: any
  ) {}

  ngOnInit() {


  }

  public increase(): void{
    this._CounterService.incCounter()
  }

  public decrease():void{
    this._CounterService.decCounter()
  }

}
