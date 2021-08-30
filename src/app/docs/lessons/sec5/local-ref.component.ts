import { Component } from "@angular/core";

@Component({
    selector: 'local-ref-comp',
    templateUrl: './local-ref.component.html'
})
export class LocalRef {    
    opened = false;
    localRefHTMLCode = `<input class="form-control" #playerNameInput>
    <button (click)="onAddPlayer(playerNameInput)>Add Player</button>`;
}