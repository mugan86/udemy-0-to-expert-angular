import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageConfigService } from '../../../services/language-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) {}

  ngOnInit() {
  }

  searchHeroe( searchText: string ) {
    console.log(searchText);
    // Redirect to search results component
    this.router.navigate(['/search', searchText]);
  }

}
