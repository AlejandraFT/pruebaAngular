import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isSpecial:boolean = false;
    public isSpecialRoute = ['/login', '/register', '/'];
    constructor(private router :Router){}
    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) this.decideAction(event);
          });
    }

    decideAction(event:any){
        this.isSpecial = !this.isSpecialRoute.includes(event.url);
        console.log(this.isSpecial);

    }
}
