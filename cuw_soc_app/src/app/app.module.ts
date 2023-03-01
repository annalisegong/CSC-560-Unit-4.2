import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { FindPlayerComponent } from './components/find-player/find-player.component';
import { DeletePlayerComponent } from './components/delete-player/delete-player.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    FindPlayerComponent,
    DeletePlayerComponent,
    PlayersListComponent,
    UpdatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
