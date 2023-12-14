import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})

export class PublicComponent implements OnInit{
  bookId: number=101;
  // bookId: string='55';  and in code we use + to convert strings in to number
  authorId: number = 11;
  constructor(private route:ActivatedRoute) {

  }
  ngOnInit() {
    this.route.firstChild?.params.subscribe(param=>{
      console.log(param)


    })

  }



}
