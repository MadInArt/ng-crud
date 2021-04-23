import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
  //TODO: 
  // 1. Login fields must have email validator, password must be no shorther then 8 chars, hidden, passes must match
  // 2. Hints what exactly wrong with provided credentials
  //             - user with provided email doesnt exist || wrong email/password --- sign in page
  //             - please provide email in right format | pass is must be at least 8 chars || passes dont match 
  // Navbar buttons chaning on token presence (if no token - login/register, if yes - dashboard/logout). 
  // When you are pressing logout button, modal asks you if you are sure or not.
    // 4. Modules asking "are you sure????" after each important click (can be either closed by pressing the X button or outside of the modal itself)
  //         - save
  //         - delete
  // 5. Protected route - user cannot go directly to dashboard y typing it's path (if you are not logged in, you will be forwarded to sign in page)
  // 8. Add user persist - if you are refresh or accidentaly close the page it will not sign you out.
  // 9. Add you are logged in as a @youremai in a navbar only after uesr been logged in 