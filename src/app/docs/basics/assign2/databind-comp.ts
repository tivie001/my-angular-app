import { Component } from "@angular/core";

@Component({
    selector: 'databind-comp',
    templateUrl: './databind.comp.html'
})
export class DataBindingComp {
    assignmentsOpened = false;
    playerName = "";
    onUpdatePlayerName(event: Event) {
        this.playerName = (<HTMLInputElement>event.target).value;
    }
}