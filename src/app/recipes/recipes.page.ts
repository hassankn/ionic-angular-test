import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

    recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://www.thespruceeats.com/thmb/dFLHcwFFtDguBZGylUlD' +
                'N8KaNaw=/960x0/filters:no_upscale():max_bytes(150000):' +
                'strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Her' +
                'o-5b587d6c46e0fb0071b0059d.jpg',
            ingredients: ['Chicken', 'Fries', 'Salad']
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            imageUrl: 'https://cdn.apartmenttherapy.info/im' +
                'age/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_960' +
                '/https://storage.googleapis.com/gen-atmedia' +
                '/3/2018/12/39ee03d747ff0e93c946bdaaf07320e76' +
                '79f0287.jpeg',
            ingredients: ['Pasta', 'Tomatoes', 'Cheese']
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
