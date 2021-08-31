import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-recipe-comp',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  title = 'Tyler\'s Angular Antics'; 
  @Output() example: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
