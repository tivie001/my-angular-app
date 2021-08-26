import { Component } from "@angular/core";

@Component({
    selector: 'directives-comp',
    templateUrl: './directives.comp.html'
})
export class DirectivesComp {
    opened = false;
    displayDetails = false;
    secretPass = "BillieJoel";
    logs:Date[] = []
    date = new Date();
    currentIndex = 0;
    showDisplayDetails () {
        this.displayDetails = !this.displayDetails;
        this.logs.push(this.date);
        this.currentIndex += 1;
        this.date = new Date(); 
        console.log(this.currentIndex);
    }
}