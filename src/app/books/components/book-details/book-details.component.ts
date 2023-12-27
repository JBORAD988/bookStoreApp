import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit{

  public id: number =0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route);
    this.route.params.subscribe((param): void => {
      this.id = param['id'];
    });
  }


}
