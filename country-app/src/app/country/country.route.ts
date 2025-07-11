import {Routes} from"@angular/router";
import { ByCapitalPages } from "./pages/by-capital-pages/by-capital-pages";
import { CountryLayout } from "./layouts/country-layout/country-layout";
import { ByCountryPages } from "./pages/by-country-pages/by-country-pages";
import { ByRegionPages } from "./pages/by-region-pages/by-region-pages";
import { CountryPageComponent } from "./pages/country-page-component/country-page-component";

 const countryRoutes:Routes = [
     {
        path:"",
        component:CountryLayout,
        children:[
           
            {
                path:"by-capital",
                component:ByCapitalPages
            },
           
            {
                path:"by-country",
                component:ByCountryPages
            },
            {
                 path:"by-region",
                 component:ByRegionPages
            },

            {
                path:"by/:codigo",
                component:CountryPageComponent
            },
             {
                path:"**",
                redirectTo:"by-capital"
            },
             
        ]
     }
]

export default countryRoutes;