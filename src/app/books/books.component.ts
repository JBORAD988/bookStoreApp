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
  // bookId: number=101;
  // bookId: string='55';  and in code we use + to convert strings in to number
  // authorId: number = 11;
  constructor(private route:ActivatedRoute) {

  }
  // ngOnInit() {
  //   this.route.firstChild?.params.subscribe(param=>{
  //     console.log(param)
  //
  //
  //   });
  //
  // }


  ngOnInit() {


  }



}
