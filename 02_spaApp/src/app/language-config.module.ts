import { NgModule  } from '@angular/core';

// To Translate imports
import { TranslateModule, TranslateLoader  } from '@ngx-translate/core';
import { createTranslateLoader } from './services/translate-loader.service';
import { HttpClient } from '@angular/common/http';

// Provider to manage language configuration to use Translations
import { LanguageConfigService } from './services/language-config.service';

@NgModule({
    imports: [
         TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
          }
        })
    ],
    exports: [
         TranslateModule
    ]
})
export class LanguageConfigModule {

    static forRoot(languageCodes?: string[], defaultLang?: string) {
        return {ngModule: LanguageConfigModule,
                    providers: [LanguageConfigService , { provide: 'config', useValue: {default: defaultLang, codes: languageCodes}}
        ]};
    }
}
