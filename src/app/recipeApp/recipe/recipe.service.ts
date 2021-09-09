import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppingList/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Vegas Roll', 
        'Deep fried sushi roll with salmon, cream cheese, and avocado, drizzled in soy sauce', 
        'https://i.pinimg.com/originals/29/93/d4/2993d4a1ed9f703db3f4a45e8f140379.jpg',
        [
            new Ingredient('Tempura breading', 1),
            new Ingredient('Salmon', 3)
        ]),
        new Recipe('Lasagne ', 
        'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and …', 
        'https://th.bing.com/th/id/R.a42c671f1e92d62033974aeb73aa515c?rik=KNy3uxeRhgvFxw&pid=ImgRaw&r=0',
        [
            new Ingredient('Lasagne noodles', 1.4),
            new Ingredient('ground beef', 2)
        ])
      ];

    constructor(private shopListService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientToShopList(ingredients: Ingredient[]) {
        this.shopListService.addIngredients(ingredients);
    }
}