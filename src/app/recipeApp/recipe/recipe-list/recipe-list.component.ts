import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Vegas Roll', 'Deep fried sushi roll with salmon, cream cheese, and avocado, drizzled in soy sauce', 'https://i.pinimg.com/originals/29/93/d4/2993d4a1ed9f703db3f4a45e8f140379.jpg'),
    new Recipe('Vegas Roll', 'Deep fried sushi roll with salmon, cream cheese, and avocado, drizzled in soy sauce', 'https://i.pinimg.com/originals/29/93/d4/2993d4a1ed9f703db3f4a45e8f140379.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
