import { Component } from "@angular/core";

@Component({
    selector: 'directive-comp',
    templateUrl: './directive.comp.html'
})
export class DirectiveComp {
    ngIfString = `
    <div>
        Player is:
        <span class="inactiveStatus" *ngIf="playerActive; else notActive">Inactive</span>
        <ng-template #notActive>
            <span class="activeStatus">Active</span>
        </ng-template> 
        </div>
        <button class="btn btn-primary" (click)="playerActive = !playerActive">Toggle Player Status</button>
    </div>`
    opened = false;
    playerActive = true;
    players = ["Phil Mickleson", "Tiger Woods", "Bryson DeChambeau"];
    ngIf = "*ngIf='someBoolean'";
    ngStyle = "[ngStyle] = '{backgroundColor: getColor()}'";
    ngClass = "[ngClass] = '{online: serverStatus === 'online'}'";
    ngFor = "*ngFor='let player of players'";
    ngSwitch = `
    <div [ngSwitch]="value">
        <p *ngSwitchCase="5">Value is 5</p>
        <p *ngSwitchCase="10">Value is 10</p>
        <p *ngSwitchDefault>Value is default</p>
    </div>`;
}