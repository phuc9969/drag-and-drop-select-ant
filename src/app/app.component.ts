import { Component, VERSION } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedLocations = [];

  Locations = [
    { id: 1, name: 'Location 1' },
    { id: 2, name: 'Location 2' },
    { id: 3, name: 'Location 3' },
    { id: 4, name: 'Location 4' },
    { id: 5, name: 'Location 5' },
    { id: 6, name: 'Location 6' },
    { id: 7, name: 'Location 7' },
    { id: 8, name: 'Location 8' },
    { id: 9, name: 'Location 9' },
    { id: 10, name: 'Location 10' },
    { id: 11, name: 'Location 11' },
    { id: 12, name: 'Location 12' },
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(
      'Drop happened! From',
      event.previousIndex,
      event.previousContainer === event.container,
      this.selectedLocations,
      'to',
      event.currentIndex
    );

    moveItemInArray(
      this.selectedLocations,
      event.previousIndex,
      event.currentIndex
    );
    this.selectedLocations = [...this.selectedLocations];
    console.log(this.selectedLocations);
  }
}
