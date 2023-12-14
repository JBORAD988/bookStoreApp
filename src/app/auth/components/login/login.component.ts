import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  name: string = '';
  email: string = '';
  id: string = '';

  constructor(private route: ActivatedRoute, private clickroute: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParam) => {
      (this.name = queryParam['name']),
        (this.email = queryParam['email']),
        (this.id = queryParam['id']);

      console.log(queryParam);
    });
  }

  goToSignup():void{
    this.clickroute.navigate(['auth/signup'])
  }

  // goToBookDetails():void{
  //   // this.clickroute.navigate(['public/book-details',100,'author',300])
  //   this.clickroute.navigate(['public/book-details',100,'author',this.id])
  // }
  goToBookDetails(id:number, authorId: number):void{
    // this.clickroute.navigate(['public/book-details',100,'author',300])
    this.clickroute.navigate(['public/book-details',id,'author',authorId],{queryParams: {name:'Jay',email:'jay@gmail.com'}})
  }
}
