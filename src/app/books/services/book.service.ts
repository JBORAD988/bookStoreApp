import { Injectable } from '@angular/core';
import {BookModel} from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks(): BookModel[]{
    return [
      {
        "id":1,
        "title": "the ups and downs of life",
        "totalPages":456,
        "author":"Jay Malhotra",
        "price":{
          "currency":"INR",
          "value":299
        }
      },
      {
        "id": 2,
        "title": "Journey Through Time",
        "totalPages": 600,
        "author": "Sophie Anderson",
        "price": {
          "currency": "INR",
          "value": 450
        }
      },
      {
        "id": 3,
        "title": "Mysteries of the Cosmos",
        "totalPages": 320,
        "author": "David Peterson",
        "price": {
          "currency": "INR",
          "value": 279
        }
      },
      {
        "id": 4,
        "title": "Recipes from Around the World",
        "totalPages": 200,
        "author": "Elena Martinez",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 5,
        "title": "Epic Adventures in Wonderland",
        "totalPages": 550,
        "author": "Alice Turner",
        "price": {
          "currency": "USD",
          "value": 12.99
        }
      },
      {
        "id": 6,
        "title": "The Art of Zen Gardening",
        "totalPages": 280,
        "author": "Haruki Yamamoto",
        "price": {
          "currency": "JPY",
          "value": 3500
        }
      },
      {
        "id": 7,
        "title": "Secrets of the Nile",
        "totalPages": 400,
        "author": "Amina Said",
        "price": {
          "currency": "EGP",
          "value": 150
        }
      }




    ];

  }
}
