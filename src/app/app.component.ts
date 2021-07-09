import { Component } from '@angular/core';
import { GameSearchService } from './services/game-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-ui';
  constructor(private _obj: GameSearchService) {
    _obj.getGameDate().subscribe((date) => {
      console.log(date);
    });
  }
}
