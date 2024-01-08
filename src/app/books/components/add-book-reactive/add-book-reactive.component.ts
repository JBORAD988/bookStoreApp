import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit , AfterViewChecked{


  @ViewChild('myForms') myForms : NgForm;

  public addBookForm: FormGroup ;

  constructor(private _bookService: BookService) {

  }

  ngAfterViewChecked() {
    console.log(JSON.stringify(this.myForms.value));
  }

  ngOnInit() {
    this.initForm();
  }
  private initForm(): void{
    this.addBookForm = new FormGroup({
      title: new FormControl('Book number 101', [Validators.required, Validators.minLength(10)]),
      author: new FormControl('Jay Borad', Validators.required),
      totalPages: new FormControl(476),
      price: new FormGroup({
        value: new FormControl(1299),
        currency: new FormControl('INR')
      }),
      publishedOn: new FormControl(new Date()),
      published: new FormControl(true),
    });

    this.addBookForm.patchValue({
      title: 'Book of the year number 101',
      author: 'Jay Borad',
    })

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

  saveBook(): void{
    console.log(this.addBookForm.value);

    if (this.addBookForm.valid){
      this._bookService.addBook(this.addBookForm.value);
    }else {
      alert("form invalid");
    }
  }
}
