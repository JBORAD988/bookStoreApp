import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {CounterService} from "../../shared/services/counter.service";
import {AuthorComponent} from "../../shared/components/author/author.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit{


  @ViewChild(AuthorComponent)private childAuthor: AuthorComponent;
  @ViewChild('decButton') private  decButton: MatButton;
  @ViewChild('addButton') private addButton: MatButton;
  @ViewChild('homeTitle') private homeTitle: ElementRef;

  constructor(public _CounterService:CounterService,
     @Inject('appTitle') public title: any
  ) {}

  ngOnInit() {


  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.childAuthor.setData(500);
      this.decButton.color="primary";
      this.addButton.color="primary";
      this.homeTitle.nativeElement.innerHTML = 'this is updated title'
    },0)

  }

  public increase(): void{
    this._CounterService.incCounter()
  }

  public decrease():void{
    this._CounterService.decCounter()
  }

}
