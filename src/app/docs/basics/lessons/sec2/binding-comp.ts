import { Component } from "@angular/core";

@Component({
    selector: 'bind-comp',
    templateUrl: './binding.comp.html'
})
export class BindComp {
    
    propertyBind = " <pre><code><p [innerText]='playerStatus'></p></code></pre>";
    eventBind = "<button (click)='onCreate()'>AddServer</button>"
    twoWayBind = `<input type='text' (input)='onUpdatePlayerName($event)'/>
<p><strong>Player Name:</strong> {{ playerName }}</p>`;
    opened = false;
    playerStatus = "Active";
    playerName = '';
    onUpdatePlayerName(event: Event) {
        this.playerName = (<HTMLInputElement>event.target).value;
    }
}