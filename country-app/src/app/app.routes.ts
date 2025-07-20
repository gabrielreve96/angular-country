import { Routes } from '@angular/router';
import { HomePages } from './shared/pages/home-pages/home-pages';
import { NotFound } from './country/component/not-found/not-found';

export const routes: Routes = [
    {
        path:"",
        component:HomePages
    },
    
    {
         path:"country", 
         loadChildren:()=>import("./country/country.route")
    },
    {
        path:"**",
        component:NotFound
    },
];
