import { Component, OnInit } from '@angular/core';
 
  import { List } from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
constructor(){}
border: boolean;
  badge = 0;
  total = 3;
  badge: number;
  buttonString: string = "Load more"

  toAdd1: List = {
    imgURL: '',
    heading: this.generateRandomString(),
    description1: "vivamus quis enim vitae est",
    description2: '"Proin maximus magna accumsan nulla lobortis,nec aliquet nilbh pulvinar...",
    todayDate: new Date()
  };
  toAdd2: List = {
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
    heading: this.generateRandomString(),
    desc1: 'vivamus quis enim vitae est',
    desc2: "Nulla tincidunt libero quis egestas venenatis",
    todayDate: new Date()
  };
    lists: List[] = [
    dotImg:"https://img.icons8.com/small/16/000000/menu-2.png",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg",
    heading: "Curabitur rutrum ut",
    description1: "vivamus quis enim vitae est",
    description2:"Proin maximus magna accumsan nulla lobortis,nec aliquet nilbh pulvinar...",
    calendarIcon:"https://img.icons8.com/ios/26/000000/calendar-filled.png",
    todayDate:  Date.now()
  },
  {
    dotImg:"https://img.icons8.com/small/16/000000/menu-2.png",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/4/43/%D0%A0%D0%B5%D0%BA%D0%B0_%D0%A1%D0%B0%D0%BC%D1%83%D1%80.jpg",
    heading: "Nunc nibh purus",
    description1: "vivamus quis enim vitae est",
    description2:"Nulla tincidunt libero quis egestas venenatis",
    calendarIcon:"https://img.icons8.com/ios/26/000000/calendar-filled.png",
    todayDate:  Date.now()
  },
  {
    dotImg:"https://img.icons8.com/small/16/000000/menu-2.png",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/d/da/Balanced_Rock_sunset.jpg",
    heading: "Phasellus eget elementum",
    description1: "vivamus quis enim vitae est",
    description2:"Vivamus maximus odio sit amet odio fermentum,at dignissim magna posuere..",
    calendarIcon:"https://img.icons8.com/ios/26/000000/calendar-filled.png",
    todayDate: Date.now(),
  }
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
    if(this.lists.length <= 4 ){
      this.addListItem();
      this.buttonString = 'Collapse';
    }
    if(this.lists.length > 4){
      this.lists.splice(0,2);
      this.buttonString = 'Load more';
    }
  }

  

  ngOnInit() {
  }

}
