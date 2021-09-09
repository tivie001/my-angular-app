import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}