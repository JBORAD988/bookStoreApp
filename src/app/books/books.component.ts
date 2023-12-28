import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet
  ]

})

export class BooksComponent implements OnInit{

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {


  }



}
