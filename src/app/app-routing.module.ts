import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetsComponent} from './pets/pets.component';
import {AddComponent} from './pets/add/add.component';

const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  { path: 'pets/add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
