import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-comp',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  title = 'Tyler\'s Angular Antics'; 

  constructor() { }

  ngOnInit(): void {
  }

}
