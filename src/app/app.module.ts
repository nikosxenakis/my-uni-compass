import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UniListComponent } from './uniList/uniList.component';
import { PieDiagramComponent } from './piediagram/piediagram.component';
import { BarDiagramComponent } from './bardiagram/bardiagram.component';
import { ProgrammesListComponent } from './programmesList/programmesList.component';
import { UniversityDetailsComponent } from './universityDetails/universityDetails.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabbarComponent,
    SearchbarComponent,
    UniListComponent,
    ProgrammesListComponent,
    PieDiagramComponent,
    BarDiagramComponent,
    UniversityDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    MatPaginatorModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
