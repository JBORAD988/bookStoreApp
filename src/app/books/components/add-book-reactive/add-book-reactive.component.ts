import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit{


  @ViewChild('myForms') myForms : NgForm;

  public addBookForm: FormGroup ;
  public titleErrorMessage: String;
  public authorErrorMessage: String;
  public pageEroorMessage: String;

  constructor(private _bookService: BookService) {

  }

  ngOnInit() {
    this.initForm();
    // this.updateFormValues(); //call from here or create button

    // console.log(this.addBookForm.controls['title']);
    // console.log(this.addBookForm.get('title'));


    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x=>{
      this.validateTitleControl(titleControl as AbstractControl);
    });

    const AuthorControl = this.addBookForm.get('author');
    AuthorControl?.valueChanges.subscribe(x=>{
      this.validateAuthorControl(AuthorControl as AbstractControl)
    })

    const PageControl = this.addBookForm.get('totalPages');
    PageControl?.valueChanges.subscribe(x=>{
      this.ValidatePageControl(PageControl as AbstractControl)
    })

  }


  updateFormValues(): void{

    this.addBookForm.patchValue({
      title: 'Book of the year number 2024',
      author: 'JBond988',
    })

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



  private validateTitleControl(titleControl: AbstractControl): void {
    this.titleErrorMessage = '';

    // Check if there are errors and if the control is touched or dirty
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      // Check for the 'required' error
      if (titleControl.errors['required']) {
        this.titleErrorMessage = 'This is a required field';
      } else {
        // Check for the 'minlength' error
        if (titleControl.errors['minlength']) {  // Corrected the spelling of 'minlength'
          this.titleErrorMessage = 'Minimum length is ' + titleControl.errors?.['minlength']?.requiredLength;

        }
      }
    }
  }

  private validateAuthorControl(AuthorControl: AbstractControl): void {
    this.authorErrorMessage = '';

    if (AuthorControl.errors && (AuthorControl.touched || AuthorControl.dirty) ) {
      if(AuthorControl.errors['required']) {
        this.authorErrorMessage = 'Please Enter Authors name first';
      }
    }
  }

  // private ValidatePageControl(PageControl: AbstractControl): void{
  //   this.pageEroorMessage='';
  //
  //   if (PageControl.errors &&(PageControl.touched || PageControl.dirty)){
  //     if (PageControl.errors['required']){
  //       this.pageEroorMessage='Please enter the number of pages'
  //     }else {
  //       if (PageControl.errors['min']){
  //         this.pageEroorMessage='Min Length is 10 Page'
  //       }else {
  //         this.pageEroorMessage='Max length is 859 Pages'
  //       }
  //     }
  //     }
  //   }


  private ValidatePageControl(PageControl: AbstractControl): void{
    this.pageEroorMessage='';

    if (PageControl.errors &&(PageControl.touched || PageControl.dirty)){
      if (PageControl.errors['required']){
        this.pageEroorMessage='Please enter the number of pages'
      }else if (PageControl.errors['min']){
          this.pageEroorMessage='Min Length is 10 Page'
        }else {
          this.pageEroorMessage='Max length is 859 Pages'
        }

    }
  }

}



