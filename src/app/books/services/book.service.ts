import { Injectable } from '@angular/core';
import {BookModel} from "../../shared/models/book.model";
import {BooksModule} from "../books.module";
// import {AddBookComponent} from "../components/add-book/add-book.component";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private allBooks: BookModel[] = [
    {
      id: 5,
      title: "epic adventures",
      totalPages: 550,
      author: "Alice Turner",
      price: {
        currency: "USD",
        value: 12.99
      },
      published:true,

    },
    {
      id:1,
      title: "the ups and downs of life",
      totalPages:456,
      author:"Jay Malhotra",
      price:{
        currency:"INR",
        value:299
      },
      published:true,
    },
    {
      id: 2,
      title: "Journey Through Time",
      totalPages: 600,
      author: "Sophie Anderson",
      price: {
        currency: "INR",
        value: 450
      },
      published:true,
    },
    {
      id: 3,
      title: "Mysteries of the Cosmos",
      totalPages: 320,
      author: "David Peterson",
      price: {
        currency: "INR",
        value: 279
      },
      published:false,
    },
    {
      id: 4,
      title: "Recipes from Around the World",
      totalPages: 200,
      author: "Elena Martinez",
      price: {
        currency: "INR",
        value: 199
      },
      published:false,
    },
    {
      id: 6,
      title: "The Art of Zen Gardening",
      totalPages: 280,
      author: "Haruki Yamamoto",
      price: {
        currency: "JPY",
        value: 3500
      },
      published:true,
    },
    {
      id: 7,
      title: "Secrets of the Nile",
      totalPages: 400,
      author: "Amina Said",
      price: {
        currency: "EGP",
        value: 150
      },
      published: false,
    }
  ];


  constructor() { }

  public addBook(bookModel: BookModel): void {
    this.allBooks.push(bookModel);
  }

  public getBooks(): BookModel[] {
    return this.allBooks;
  }
  public recentBooks(): any[]{
    return [
      {
        "id":1,
        "title": "the ups and downs of life",
        "totalPages":456,
        "author":"Jay Malhotra",
        "price":{
          "currency":"INR",
          "value":299
        },
        "published":true,
      },
      {
        "id": 2,
        "title": "Journey Through Time",
        "totalPages": 600,
        "author": "Sophie Anderson",
        "price": {
          "currency": "INR",
          "value": 450
        },
        "published":true,
      },
      {
        "id": 3,
        "title": "Mysteries of the Cosmos",
        "totalPages": 320,
        "author": "David Peterson",
        "price": {
          "currency": "INR",
          "value": 279
        },
        "published":true,
      }



    ];

  }
}
