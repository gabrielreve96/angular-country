import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Footer } from "../../component/footer/footer";
@Component({
  selector: 'app-home-pages',
  imports: [RouterLink],
  templateUrl: './home-pages.html',
  styleUrl: './home-pages.css'
})
export class HomePages {
 constructor(
    private readonly router:Router
 ){}
  getStarted(){
    this.router.navigateByUrl("/country/by-capital")
  }
}
