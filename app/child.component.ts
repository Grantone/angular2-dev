import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <h3 (click)="clicked('I have been clicked.')">{{ childThing }}</h3>
  `
})

export class ChildComponent {
  @Input() childThing: string;
  @Output() clickSender = new EventEmitter();
  clicked(thingToSend) {
    // sends the string "I have been clicked" to the parent.
    this.clickSender.emit(thingToSend);
  }
}
