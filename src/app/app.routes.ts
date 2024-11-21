import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OrderComponent } from './views/order/order.component';
import { MenuComponent } from './views/menu/menu.component';
import { DetailsComponent } from './views/details/details.component';
import { CategoryComponent } from './views/category/category.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    }
];
