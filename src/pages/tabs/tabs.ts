import { Component } from '@angular/core';

import { CreatePage } from '../create/create';
import { PlayPage } from '../play/play';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CreatePage;
  tab2Root = PlayPage;

  constructor() {

  }
}
