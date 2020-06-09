import {Component, OnInit} from '@angular/core';
import {Pet} from '../_models/pet';
import {PetsService} from '../_services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: Pet[];

  constructor(private petsService: PetsService) {
  }

  ngOnInit() {
    this.petsService.getPets().subscribe(data => {
      this.pets = data;
    });
  }

  delete(id: bigint) {
    this.petsService.deletePet(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
