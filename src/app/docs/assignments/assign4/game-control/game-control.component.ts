import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  opened = false;
  @Output() intervalFired = new EventEmitter<number>();
  interval:any;
  prevNum = 0;

  constructor() { }

  ngOnInit(): void {
  }
  startGame() {
    this.interval = setInterval(() => { 
      this.intervalFired.emit(this.prevNum + 1);
      this.prevNum++;
     }, 1000);
  }
  stopGame() {
    clearInterval(this.interval);
  }

}
