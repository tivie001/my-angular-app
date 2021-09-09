import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef|any;
  @ViewChild('amountInput') amountInputRef: ElementRef|any;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  addIngred() {
    const ingredName = this.nameInputRef.nativeElement.value;
    const ingredAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredName, ingredAmount);
    this.shopListService.addIngredient(newIngredient);
  }
}
