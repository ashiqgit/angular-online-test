import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  //1. Debouncing logic
  // searchResult: string = '';
  // private timeoutId: any;

  // onEachKeyPress(event: any) {
  //   clearTimeout(this.timeoutId);

  //   this.timeoutId = setTimeout(() => {
  //     this.callApiEndPoint(event.target.value);
  //   }, 2000);
  // }

  // callApiEndPoint(typedString: string) {
  //   console.log('typedString', typedString);
  //   this.searchResult = typedString;
  // }


  //2. Throttling
  // searchResult: string = '';
  // private isThrottled = false;

  // onEachKeyPress(event: any) {
  //   if (this.isThrottled) return;

  //   this.callApiEndPoint(event.target.value);
  //   this.isThrottled = true;

  //   setTimeout(() => {
  //     this.isThrottled = false;
  //   }, 2000); // 2 seconds throttle time
  // }

  // callApiEndPoint(typedString: string) {
  //   console.log('typedString', typedString);
  //   this.searchResult = typedString;
  // }

  //3. Accordion
  // accordions = [
  //   { title: 'Section 1', content: 'This is content for section 1', open: false },
  //   { title: 'Section 2', content: 'This is content for section 2', open: false },
  //   { title: 'Section 3', content: 'This is content for section 3', open: false }
  // ];

  // toggleAccordion(index: number): void {
  //   this.accordions[index].open = !this.accordions[index].open;
  // }

  //4. Progress Bar
   progressValue: number = 0;

  increaseProgress() {
    if (this.progressValue < 100) {
      this.progressValue += 10;
    }
  }

  decreaseProgress() {
    if (this.progressValue > 0) {
      this.progressValue -= 10;
    }
  }
}
