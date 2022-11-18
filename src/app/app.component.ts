import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-1';
  count=1
  place=["gantok","siliguri","Namchi"]
  A=0;
  B=0;
  C=0;
  tiles: any = [
    {text: {location:"gangtok",temp:"16",humidity:"78",sunrise:"6:45",sunset:"4:48"}, cols: 3, rows: 1, color: 'lightblue'},
    {text: {location:"gangtok",temp:"16",humidity:"78",sunrise:"6:45",sunset:"4:48"}, cols: 1, rows: 2, color: 'lightgreen'},
    {text: {location:"gangtok",temp:"16",humidity:"78",sunrise:"6:45",sunset:"4:48"}, cols: 1, rows: 1, color: 'lightpink'},
    {text: {location:"gangtok",temp:"16",humidity:"78",sunrise:"6:45",sunset:"4:48"}, cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  add=()=>{
    this.C=this.A+this.B
  }
}
