import { Component, ElementRef, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef|any;
  @ViewChild('amountInput') amountInputRef: ElementRef|any;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  addIngred() {
    const ingredName = this.nameInputRef.nativeElement.value;
    const ingredAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredName, ingredAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
