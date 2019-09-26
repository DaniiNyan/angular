import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe',
    'The first recipe from this app',
    'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),

    new Recipe('Second Recipe',
    'The second recipe from this app',
    'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
