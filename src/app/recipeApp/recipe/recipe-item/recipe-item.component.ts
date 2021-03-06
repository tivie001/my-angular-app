import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe|any;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {}
  showRecipeDetails() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
