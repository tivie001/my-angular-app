import { Component } from "@angular/core";

@Component({
    selector: 'basics-comp',
    templateUrl: './basics-comp.html'
})
export class BasicsComp {
    
    exampleString = "This is an example of an interpolated string rendered dynamically";
    codedString = "{{ 'Player' }} with jersey #{{ playedId }} is {{ getPlayerStatus() }}";
    propertyBind = " <pre><code><p [innerText]='playerStatus'></p></code></pre>";
    eventBind = "<button (click)='onCreate()'>AddServer</button>"
    twoWayBind = `<input type='text' (input)='onUpdatePlayerName($event)'/>
<p><strong>Player Name:</strong> {{ playerName }}</p>`;
    playerId = 12;
    playerStatus = "Active";
    lessonsOpened = false;
    playerName = "";

    getPlayerStatus() {
        return this.playerStatus;
    }
    allowNewCourse = false;
    constructor() {
        setTimeout(() => {
            this.allowNewCourse = true;
        }, 1000)
    }
    onUpdatePlayerName(event: Event) {
        this.playerName = (<HTMLInputElement>event.target).value;
    }
}