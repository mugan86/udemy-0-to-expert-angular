import { Component, OnInit } from '@angular/core';
import { LanguageConfigService } from 'src/app/services/language-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeLanguage: string;
  constructor(private languageConfigService: LanguageConfigService) { }

  ngOnInit() {
    this.activeLanguage = this.languageConfigService.getLanguage();
  }

  changeLanguage(lang: string) {
    this.activeLanguage = lang;
    this.languageConfigService.change(lang);
  }

}
