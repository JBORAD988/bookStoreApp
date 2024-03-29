import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
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
  public pageErrorMessage: String;
  public amountErrorMessage: String;

  constructor(private _bookService: BookService, private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
    // this.updateFormValues(); //call from here or create button

    // console.log(this.addBookForm.controls['title']);
    // console.log(this.addBookForm.get('title'));


    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(title=>{
      this.validateTitleControl(titleControl as AbstractControl);
    });

    const AuthorControl = this.addBookForm.get('author');
    AuthorControl?.valueChanges.subscribe(author=>{
      this.validateAuthorControl(AuthorControl as AbstractControl)
    })

    const PageControl = this.addBookForm.get('totalPages');
    PageControl?.valueChanges.subscribe(pages=>{
      this.ValidatePageControl(PageControl as AbstractControl)
    })



    const AmountControl = this.addBookForm.get('price.value');
    AmountControl?.valueChanges.subscribe(amount => {
      this.ValidateAmount(AmountControl as AbstractControl);
    });

    const FormatTypeControl = this.addBookForm.get('formatType');
    FormatTypeControl?.valueChanges.subscribe(x=>{
      this.formatTypeChanged(x);
    })

  }


  public get authors() {
    return <FormArray<any>>this.addBookForm.get('authors')
  }

  updateFormValues(): void{

    this.addBookForm.patchValue({
      title: 'Book of the year number 2024',
      author: 'JBond988',
    })

  }
  private initForm(): void{
    this.addBookForm = this._formBuilder.group({
      title: ['this is defauld with multi validator', [Validators.required, Validators.minLength(10)]],
      author: ['this author with validation', Validators.required],
      totalPages: '',
      price: this._formBuilder.group({
        value: '',
        currency: '',
      }),
      publishedOn: '',
      published: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuilder.array([
        this.getAuthorControl(),
        this.getAuthorControl()
      ])

    });
  }

  private getAuthorControl(): FormGroup {
    return this._formBuilder.group({
      fullName: '',
      address:''
    });
  }

  public AddMoreAuthor(): void{
    this.authors.push(this.getAuthorControl());
  }

  public RemoveAuthor(i: number): void{
    this.authors.removeAt(i);
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
      this._bookService.addBook(this.addBookForm.value).subscribe(x=>{
        console.log(x);
      });
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

  private ValidatePageControl(PageControl: AbstractControl): void{
    this.pageErrorMessage='';

    if (PageControl.errors &&(PageControl.touched || PageControl.dirty)){
      if (PageControl.errors['required']){
        this.pageErrorMessage='Please enter the number of pages'
      }else if (PageControl.errors['min']){
          this.pageErrorMessage='Min Length is 10 Page'
        }else {
          this.pageErrorMessage='Max length is 859 Pages'
        }

    }
  }

  private ValidateAmount(AmountControl: AbstractControl): void {
    this.amountErrorMessage = '';

    if (AmountControl.errors && (AmountControl.touched || AmountControl.dirty)) {
      if (AmountControl.errors['required']) {
        this.amountErrorMessage = 'Enter Amount';
      }
      // Add additional validation checks if needed
    }
  }

private formatTypeChanged(formatType: string): void{
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');
if (formatType ==='pdf'){
  pdfControl?.addValidators([Validators.required, Validators.minLength(10)])
  docControl?.clearValidators();

}else if (formatType === 'doc'){
 docControl?.addValidators(Validators.required)
 pdfControl?.clearValidators();
}

pdfControl?.updateValueAndValidity();
docControl?.updateValueAndValidity();

}


}



