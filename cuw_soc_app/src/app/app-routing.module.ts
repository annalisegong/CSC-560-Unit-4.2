import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DeletePlayerComponent } from './components/delete-player/delete-player.component';
import { FindPlayerComponent } from './components/find-player/find-player.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';



const routes: Routes = [
  {path: '', redirectTo: 'getAll', pathMatch: 'full'},
  {path: 'add', component: AddPlayerComponent},
  {path: 'delete/:id', component: DeletePlayerComponent},
  {path: 'getOne/:id', component: FindPlayerComponent},
  {path: 'getAll', component: PlayersListComponent},
  {path: 'update/:id', component: UpdatePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
