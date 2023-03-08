import {Component, Input} from '@angular/core';
import {Character} from "../Models/Character";

@Component({
  selector: 'clash-card',
  templateUrl: './clash-card.component.html',
  styleUrls: ['./clash-card.component.scss']
})
export class ClashCardComponent {
  @Input()
  character!: Character;

  onSelectClashCard() {
    return {
      'barbarian' : this.character.name == 'Barbarian',
      'archer' : this.character.name == 'Archer',
      'giant' : this.character.name == 'Giant',
      'goblin' : this.character.name == 'Goblin',
      'wizard' : this.character.name == 'Wizard',
    }
  }

  onClashCardImage() {
    return {
      'clash-card__image--barbarian' : this.character.name == 'Barbarian',
      'clash-card__image--archer' : this.character.name == 'Archer',
      'clash-card__image--giant' : this.character.name == 'Giant',
      'clash-card__image--goblin' : this.character.name == 'Goblin',
      'clash-card__image--wizard' : this.character.name == 'Wizard',
    }
  }

  onSelectCardLevel() {
    return {
      'clash-card__level--barbarian' : this.character.name == 'Barbarian',
      'clash-card__level--archer' : this.character.name == 'Archer',
      'clash-card__level--giant' : this.character.name == 'Giant',
      'clash-card__level--goblin' : this.character.name == 'Goblin',
      'clash-card__level--wizard' : this.character.name == 'Wizard',
    }
  }

  onSelectCardUnitStat() {

    return {
      'clash-card__unit-stats--barbarian' : this.character.name == 'Barbarian',
      'clash-card__unit-stats--archer' : this.character.name == 'Archer',
      'clash-card__unit-stats--giant' : this.character.name == 'Giant',
      'clash-card__unit-stats--goblin' : this.character.name == 'Goblin',
      'clash-card__unit-stats--wizard' : this.character.name == 'Wizard',
    }
  }
}
