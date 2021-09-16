import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GameCardsComponent } from './components/game-cards/game-cards.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'games/genres/:genreName', component: GameCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
