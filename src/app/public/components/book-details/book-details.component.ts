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
  protected name: string = '';
  protected email: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route);
    this.route.params.subscribe((param): void => {
      console.log(param)
      // Use correct parameter names (params instead of Param)
      // Also, use '+' to convert string to number if needed
      // this.id = +params['id'];  we can use + to convert string in to nimber
      this.id = param['id'];
      this.authorId = param['authorId'];
    });

    this.route.queryParams.subscribe(queryParam =>{
      this.name=queryParam['name'],
        this.email=queryParam['email'],
      console.log(queryParam)
    })
  }

}
