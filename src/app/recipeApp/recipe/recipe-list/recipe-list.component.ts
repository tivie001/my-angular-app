import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Vegas Roll', 
    'Deep fried sushi roll with salmon, cream cheese, and avocado, drizzled in soy sauce', 
    'https://i.pinimg.com/originals/29/93/d4/2993d4a1ed9f703db3f4a45e8f140379.jpg'),
    new Recipe('Lasagne ', 
    'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and …', 
    'https://th.bing.com/th/id/R.a42c671f1e92d62033974aeb73aa515c?rik=KNy3uxeRhgvFxw&pid=ImgRaw&r=0')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }
  onShowRecipeDetail(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
