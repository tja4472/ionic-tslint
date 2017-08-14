import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface IFirebaseTodo {
  description?: string;
  index: number;
  name: string;
  isComplete: boolean;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    let a: IFirebaseTodo = {
      description: 'desc',
      index: 1,
      isComplete: false,
      name: 'second',
    };
    a = a;
  }

}
