import { Component } from "@angular/core";

@Component({
    selector: 'string-inter-comp',
    templateUrl: './string-inter.comp.html'
})
export class StringInterComp {
    
    exampleString = "This is an example of an interpolated string rendered dynamically";
    codedString = "{{ 'Player' }} with jersey #{{ playedId }} is {{ getPlayerStatus() }}";
    playerId = 12;
    playerStatus = "Active";
    opened = false;

    getPlayerStatus() {
        return this.playerStatus;
    }
    allowNewCourse = false;
    constructor() {
        setTimeout(() => {
            this.allowNewCourse = true;
        }, 1000)
    }
}