import {Component, OnInit} from '@angular/core';
import {PetsService} from '../../_services/pets.service';
import {Pet} from '../../_models/pet';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  pet: Pet;

  constructor(private petsService: PetsService) {
    this.pet = new Pet();
  }

  onSubmit() {
    this.petsService.addPet(this.pet).subscribe(() => this.resetFields());
  }

  private resetFields() {
    this.pet = new Pet();
  }
}
