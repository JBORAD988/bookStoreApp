import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})

export class PublicComponent {

  bookId: number=101;
  // bookId: string='55';  and in code we use + to convert strings in to number
  authorId: number = 11;

}
