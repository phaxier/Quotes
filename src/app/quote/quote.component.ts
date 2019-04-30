// import { Component, OnInit } from '@angular/core';
// import {Quote} from '../quote';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })
// export class QuoteComponent implements OnInit {

//   title = 'New Quotes';
//   quotes = [
//     /*new Quote(1, 'Maji', 'Hayazoleki', new Date(2019, 4, 23)),
//     new Quote(2, 'Akili', 'Nywele', new Date(2019, 04, 04) ),
//     new Quote(3, 'Juu', 'Chini', new Date(2019, 4, 18)),
//     new Quote(4, 'Mjinga', 'Ha', new Date(2019, 4, 27)),
//     new Quote(5, 'Glitters', 'gold', new Date(2019, 4, 24)),
//     new Quote(6, '', '..', new Date(2019, 4, 26)),*/

//   ];

//   deleteQuote(isComplete, index) {
//     if (isComplete) {
//       const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

//       if (toDelete) {this.quotes.splice(index, 1);
//     }
//     }
//   }
//    toogleDetails(index) {
//       this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }
//     constructor() {}
//     ngOnInit() {

//   }
//   addNewQuote(quote) {
//     const quoteLength = this.quotes.length;
//     quote.id = quoteLength + 1;
//     quote.completeDate = new Date(quote.completeDate );
//     this.quotes.push(quote);
//   }

// }

