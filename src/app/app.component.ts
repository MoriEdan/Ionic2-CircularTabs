import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LandingPage } from '../pages/landing-page/landing-page';
import { TabsBottom } from '../pages/tabs-bottom/tabs-bottom';
import { TabsBottom2 } from '../pages/tabs-bottom2/tabs-bottom2';
import { TabsRight } from '../pages/tabs-right/tabs-right';
import { TabsRight2 } from '../pages/tabs-right2/tabs-right2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LandingPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Tabs Bottom', component: TabsBottom },
      { title: 'Tabs Bottom Type 2', component: TabsBottom2 },
      { title: 'Tabs Right', component: TabsRight },
      { title: 'Tabs Right Type 2', component: TabsRight2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
