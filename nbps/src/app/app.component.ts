import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nbps';

  constructor(private _router: Router){

  }

  goHome(){
    this._router.navigateByUrl('/dashboard');
  }
}
