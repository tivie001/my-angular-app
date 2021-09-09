import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-comp',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  title = 'Tyler\'s Angular Antics';  
  selectedRecipe: Recipe|any;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

}
