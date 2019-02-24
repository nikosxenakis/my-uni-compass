import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UniListComponent } from './uniList/uniList.component';
import { UniversityDetailsComponent } from './universityDetails/universityDetails.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabbarComponent,
    SearchbarComponent,
    UniListComponent,
    UniversityDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
