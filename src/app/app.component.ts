import {Component} from '@angular/core';
import {CHARACTERS} from "./db-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clash-of-clans-adv-card-comp-angular';
  CHARACTERS = CHARACTERS;


}
