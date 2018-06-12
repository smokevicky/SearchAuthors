import { Component } from '@angular/core';
import { AuthorService } from './Services/author.service';
import { AuthorDetails, AuthorWorks } from './Models/author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search Authors App';

  authorCode = '';
  authorDetails: AuthorDetails;
  errorMessage: string;
  authorWorks: AuthorWorks;

  constructor(private _authorService: AuthorService) {}

  isAlphaNumeric(valueToCheck: string): boolean {
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test(valueToCheck);
  }

  eventSearchAuthors(): void {
    if (this.authorCode && this.isAlphaNumeric(this.authorCode.trim())) {
      this.errorMessage = '';
      this.getAuthorDetails();
    } else {
      this.errorMessage = 'Please input a valid AlphaNumeric value.';
    }
  }

  getAuthorDetails(): void {
    this._authorService.getAuthorDetails(this.authorCode)
    .subscribe(result => {
      this.authorDetails = result.json();
      this.authorWorks = null;
    }, (err) => {
      this.authorDetails = null;
      this.authorWorks = null;
      this.errorMessage = `There is no author with code ${this.authorCode} in our system. Please try again.`;
    });
  }

  getAuthorRecentWorks(): void {
    this._authorService.getAuthorWorks(this.authorCode)
    .subscribe(result => {
      this.authorWorks = result.json();
    }, (err) => {
      this.authorDetails = null;
      this.authorWorks = null;
      this.errorMessage = `There is no author with code ${this.authorCode} in our system. Please try again.`;
    });
  }


}
