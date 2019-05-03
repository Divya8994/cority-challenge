import { Component, OnInit } from '@angular/core';
import {List} from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor() { }
  border: boolean;
  total = 3;
  badge: number=0;
  hide = [];
  buttonString: string = "Load more"

  toAdd1: List = {
    imgURL: '',
    heading: this.generateRandomString(),
    desc1: 'this is description line1',
    desc2: 'this is description line 2',
    todayDate: new Date()
  };
 
  lists: List[] = [
    {
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
      heading: "Curabitur rutrum ut",
      desc1: "vivamus quis enim vitae est",
      desc2: "Proin maximus magna accumsan nulla lobortis,nec aliquet nilbh pulvinar...",
      todayDate: new Date()

    },
    {
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/4/43/%D0%A0%D0%B5%D0%BA%D0%B0_%D0%A1%D0%B0%D0%BC%D1%83%D1%80.jpg",
      heading: "Nunc nibh purus",
      desc1: "vivamus quis enim vitae est",
      desc2: "Nulla tincidunt libero quis egestas venenatis",
      todayDate: new Date()

    },
    {
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/d/da/Balanced_Rock_sunset.jpg",
      heading: "Phasellus eget elementum",
      desc1: "vivamus quis enim vitae est",
      desc2: "Vivamus maximus odio sit amet odio fermentum,at dignissim magna posuere..",
      todayDate: new Date()

    },
  ];
  generateRandomString(): string {
    const string1: string = Math.random().toString(36).substring(9);
    const string2: string = Math.random().toString(36).substring(3);
    const string3: string = Math.random().toString(36).substring(6);
    return(string1 + ' ' + string2 + ' ' + string3 );

  }
  addListItem(): void {
    this.border = true;
    this.total++ ;
    this.badge++;
    this.lists.unshift(this.toAdd1);

  }
  loadMore(): void{
      this.addListItem();
      this.addListItem();


  }
  collapse() {
    this.lists = [];
    this.total = 0;
    this.badge = 0;

  }
  
     deleteEntry(index) {
    this.lists.splice(index, 1);
    this.total--;
    }
  ngOnInit() {


  } 


}
