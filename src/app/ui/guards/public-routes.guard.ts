import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PublicRoutesGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if(token){
      this.router.navigate(['products']);
      return false;
    } else{
      return true;
    }
  }
  
}
