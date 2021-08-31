import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit  {
  title = 'Tyler\'s Angular Antics'; 
  constructor() { }

  ngAfterViewInit() {}

}
