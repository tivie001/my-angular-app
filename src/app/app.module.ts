import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { SuccessAlertComp } from './docs/basics/assign1/success-alert-comp';
import { WarningAlertComp } from './docs/basics/assign1/warning-alert-comp';
import { DataBindingComp } from './docs/basics/assign2/databind-comp';
import { StringInterComp } from './docs/basics/lessons/sec2/string-inter-comp';
import { BindComp } from './docs/basics/lessons/sec2/binding-comp';
import { DirectiveComp } from './docs/basics/lessons/sec2/directive-comp';
import { DirectivesComp } from './docs/basics/assign3/directives-comp';
import { HeaderComponent } from './recipeApp/header/header.component';
import { ShoppingListComponent } from './recipeApp/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './recipeApp/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './recipeApp/recipe/recipe.component';
import { RecipeListComponent } from './recipeApp/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeApp/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeApp/recipe/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  { path: '', component: DocsComponent},
  { path: 'docs', component: DocsComponent },
  { path: 'recipes', component: RecipeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    SuccessAlertComp,
    WarningAlertComp,
    DataBindingComp,
    StringInterComp,
    BindComp,
    DirectiveComp,
    DirectivesComp,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
