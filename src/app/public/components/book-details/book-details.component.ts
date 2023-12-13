import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit{

  public id: number =0;
  public authorId: number = 0;
  constructor(private route: ActivatedRoute) {}
  //
  // ngOnInit() {
  //   console.log(this.route);
  //   this.route.params.subscribe((Param ):void=>{
  //     // console.log(param);
  //     this.id= Param.bookId;
  //     this.authorId = Param.authorId;
  //   });
  //
  // }


  ngOnInit() {
    console.log(this.route);
    this.route.params.subscribe((params): void => {
      console.log(params)
      // Use correct parameter names (params instead of Param)
      // Also, use '+' to convert string to number if needed
      this.id = params['id'];
      this.authorId = params['authorId'];
    });
  }


}
