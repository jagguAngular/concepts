import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigations = [
    {
      name: 'Home',
      id: 1
    },
    {
      name: 'Dashboard',
      id: 2
    },
    {
      name: 'Chnage Password',
      id: 3
    },
    {
      name: 'Contac Us',
      id: 4
    },
    {
      name: 'About Us',
      id: 5
    },

  ]


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // onClickHome(): any {
  //   this.router.navigateByUrl('Home');
  // }

  onClickMenus(menu: any): any {
    var split = menu.name.split(' ');
    console.log(split);
    var roterLink = split.join('')
    console.log(roterLink);

    this.router.navigateByUrl(roterLink)
  }

}


