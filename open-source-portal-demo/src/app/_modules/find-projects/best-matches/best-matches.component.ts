import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-matches',
  templateUrl: './best-matches.component.html',
})
export class BestMatchesComponent implements OnInit {
  selectedButton : any = 'button1';
  constructor() { }

  ngOnInit(): void {
  }

}
