import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {BookModel} from "../../../shared/models/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit , AfterViewChecked{


  @ViewChild('myForms') myForms : NgForm;

  public addBookForm: FormGroup ;

  constructor() {
    this.addBookForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    totalPages: new FormControl(),
    price: new FormControl(),
    publishedOn: new FormControl(),
    published: new FormControl(),
  });
  }

  ngAfterViewChecked() {
    console.log(JSON.stringify(this.myForms.value));
  }

  ngOnInit() {
  }

  private initForm(): void{

  }

  Currencys = [
    { value: 'USD', viewValue: 'United States Dollar' },
    { value: 'INR', viewValue: 'Indian Rupee' },
    { value: 'AUD', viewValue: 'Australian Dollar' },
    {value: 'EUR ', viewValue: 'Euro'},
    {value: 'GBP ', viewValue: 'British Pound Sterling'},
    {value: 'CAD ', viewValue: 'Canadian Dollar'},
    {value: 'NZD ', viewValue: 'New Zealand Dollar'},
    {value: 'CHF ', viewValue: 'Swiss Franc'},
    {value: 'AED' , viewValue: 'United Arab Emirates Dirham'},
  ];
}
