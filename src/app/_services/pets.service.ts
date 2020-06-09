import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pet} from '../_models/pet';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class PetsService {

  constructor(private http: HttpClient) {
  }


  public getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(environment.backendUrl + '/pets');
  }

  public deletePet(id: bigint) {
    return this.http.delete(environment.backendUrl + '/delete/' + id);
  }

  public addPet(pet: Pet) {
    return this.http.post<Pet>(environment.backendUrl + '/add', {
      name: pet.name,
      age: pet.age
    });
  }
}
