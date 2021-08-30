import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit { 
  oddNums: number[] = [];
  evenNums: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onIntervalFired(firedNum: number){
    if (firedNum % 2 === 0) {
      this.evenNums.push(firedNum);
    } else {
      this.oddNums.push(firedNum);
    }
  }

}
