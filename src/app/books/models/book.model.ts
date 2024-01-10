import {AuthorModel} from "./author.model";

export class BookModel {
  public id: number;
  public title: string;
  // public author: string;
  public totalPages: number;
  // public price: { currency: string; value: number };
  public price: { currency: string;  Value: number } = { currency: 'USD', Value: 10 };
  public published: boolean;
  public publishedOn: Date;
  public authors: AuthorModel[];

}
