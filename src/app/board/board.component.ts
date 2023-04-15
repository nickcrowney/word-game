import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor() {}
  // public value1: string = '1';

  public check: boolean = false;
  public answer: string[] = ['h', 'e', 'l', 'l', 'o'];
  public letters: any[] = [
    { id: '0', answer: this.answer[0], correct: false },
    { id: '1', answer: this.answer[1], correct: false },
    { id: '2', answer: this.answer[2], correct: false },
    { id: '3', answer: this.answer[3], correct: false },
    { id: '4', answer: this.answer[4], correct: false },
  ];
  public rows: number[] = [0, 1, 2, 3, 4, 5];
  public value1: string = '';

  inputValue: string = '';

  public letterContainer(letter: any) {
    let style = { 'background-color': 'rgb(117, 117, 119)' };
    if (letter.correct === true && this.check) {
      style['background-color'] = 'green';
    }
    console.log(style, letter, 'letter style HERE');

    return style;
  }
  trackByFn(index: number, letter: any) {
    return letter.id; // use a unique identifier for the item, such as an id
  }

  onInput(event: Event, id: any) {
    const div = event.target as HTMLDivElement;
    const text = div.innerText;
    const letterRegex = /^[A-Za-z]$/;

    if (text.length > 1) {
      console.log(text, 'TEXT');

      div.innerText = text.slice(0, 1);
    }
    if (!letterRegex.test(text)) {
      div.innerText = '';
      this.letters[id].correct = false;
    }
  }

  onKeydown(event: KeyboardEvent, id: any) {
    // console.log(event, 'EVENT KEYDOWN');

    const letterRegex = /^[A-Za-z]$/;

    if (
      typeof event.key === 'string' &&
      event.key.length === 1 &&
      letterRegex.test(event.key)
    ) {
      this.value1 = event.key;
      console.log(
        event.key,
        this.value1,
        this.letters[id].answer,
        this.letters,
        'event key HERE'
      );

      if (this.value1 === this.letters[id].answer) {
        this.letters[id].correct = true;
      }
      console.log(this.letters, 'LETTERS', this.letters[id], 'ID');

      // event.preventDefault();
    }
    console.log(this.value1); // for testing purposes
  }

  public guess() {
    this.check = true;
  }

  ngOnInit(): void {}
}
