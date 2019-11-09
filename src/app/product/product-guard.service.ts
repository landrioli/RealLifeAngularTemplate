import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this._router.navigate(['/product']);
      return false;
    }
    return true;
  }
}
