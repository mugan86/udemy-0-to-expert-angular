import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageConfigService } from '../../../services/language-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    ` .langs {color: rgba(255,255,255,.5)}
      .langs:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .langs:active {
        color: white;
      }

      .lang-select {
        color: white;
        text-decoration: underline
      }
    
    `;
  ]
})
export class NavbarComponent implements OnInit {
  activeLanguage: string;
  constructor( private router: Router, private languageConfigService: LanguageConfigService) {}

  ngOnInit() {
    this.activeLanguage = this.languageConfigService.getLanguage();
  }

  searchHeroe( searchText: string ) {
    console.log(searchText);
    // Redirect to search results component
    this.router.navigate(['/search', searchText]);
  }

  changeLanguage(lang: string) {
    this.activeLanguage = lang;
    this.languageConfigService.change(lang);
  }

}
