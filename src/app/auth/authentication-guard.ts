import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router) {

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (sessionStorage.getItem('Login')) {
            return true;
        } else {
            this.router.navigate(['auth/login']);
        }
        return false;
    }

}