import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { SuccessAlertComp } from './docs/assignments/assign1/success-alert-comp';
import { WarningAlertComp } from './docs/assignments/assign1/warning-alert-comp';
import { DataBindingComp } from './docs/assignments/assign2/databind-comp';
import { StringInterComp } from './docs/lessons/sec2/string-inter-comp';
import { BindComp } from './docs/lessons/sec2/binding-comp';
import { DirectiveComp } from './docs/lessons/sec2/directive-comp';
import { DirectivesComp } from './docs/assignments/assign3/directives-comp';
import { LocalRef } from './docs/lessons/sec5/local-ref.component';
import { Lifecycles } from './docs/lessons/sec5/lifecycles.component';
import { HeaderComponent } from './recipeApp/header/header.component';
import { ShoppingListComponent } from './recipeApp/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './recipeApp/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './recipeApp/recipe/recipe.component';
import { RecipeListComponent } from './recipeApp/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeApp/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeApp/recipe/recipe-detail/recipe-detail.component';
import { GameControlComponent } from './docs/assignments/assign4/game-control/game-control.component';
import { OddComponent } from './docs/assignments/assign4/odd/odd.component';
import { EvenComponent } from './docs/assignments/assign4/even/even.component';


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
    LocalRef,
    Lifecycles,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
