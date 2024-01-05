import {PriceModel} from "./price.model";


// export class BookModel {
//   public id: number;
//   public title: string;
//   public totalPages: number;
//   private _author: string;
//   public price: {
//     currency: string;
//     value: number;
//   };
//
//   public set author(value: string) {
//     this._author = value;
//   }
//
//   public get author() {
//     return this._author;
//   }
// }

export class BookModel {
  public id: number;
  public title: string;
  public author: string;
  public totalPages: number;
  // public price: { currency: string; value: number };
  public price: { currency: string;  value: number } = { currency: 'USD', value: 0 };
  public published: boolean;
  public publishedOn: Date;

}
