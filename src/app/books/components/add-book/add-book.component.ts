import {Component, OnInit, ViewChild,AfterViewChecked} from '@angular/core';
import {BookService} from "../../services/book.service";
import {BookModel} from "../../../shared/models/book.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit , AfterViewChecked{

@ViewChild('myForms') myForms : NgForm;



  public model: BookModel;
  constructor(private _bookService: BookService) {
  }

  ngAfterViewChecked() {
    console.log(JSON.stringify(this.myForms.value));
  }

  ngOnInit() {
    this.model = new BookModel();
    this.model.title='DemoBook';
    // this.model.author='DemoAuthor';
    this.model.totalPages= 703 ;
    this.model.price.value = 200;
    this.model.price.currency = 'INR'
    this.model.publishedOn= new Date()
    this.model.published = true;






  }

  // saveBook(value: any): void{
    // console.log(value)
    // const book:BookModel = new BookModel()
    // book.title = value.title;
    // book.author = value.author;
    // book.totalPages = value.pages;
    // book.price.value = value.price;
    // book.price.currency = value.currency
    // book.published = value.isPublished;
    // book.publishedOn = value.publishedOn;
    // this._bookService.addBook(book);
  // }

  saveBook(): void {

    if (this.myForms.valid){
      this._bookService.addBook(this.model)
    }
    else {
      alert("Form Invalid")
    }



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
