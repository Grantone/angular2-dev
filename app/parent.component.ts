import { Component } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <child
      [childThing]="parentThing"
      (clickSender)="receiveFromChild($event)"
    ></child>
  `
})

export class ParentComponent {
  parentThing = "Hello!";
  receiveFromChild(aSentence) {
    // prints out whatever is sent from the child on click.
    console.log(aSentence);
  }
}
