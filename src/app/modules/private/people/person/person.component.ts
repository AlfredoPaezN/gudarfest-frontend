import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { PeopleService } from 'src/app/core/services/people.service';



@Component({
  selector: 'app-person-detail',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonDetailComponent implements OnInit {

  public idPerson: any = this._route.snapshot.paramMap.get('id');
  public chargeImg: string = '';
  selectedImage!: File;
  form: FormGroup;
  url: string | ArrayBuffer | null | undefined;



  constructor(private peopleService: PeopleService,
    private _route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
      this.form = this.getForm(<any>{})
    }

  ngOnInit(): void {
    const personDetailObserver: Observer<any> = {
      next: value => this.getForm(value),
      error: error => console.log,
      complete: () => {
      }
    }
    if(this.idPerson != null){
      this.peopleService.read(this.idPerson).subscribe(personDetailObserver)
    }


  }

  toBack(){
    this.router.navigate(['/'])
  }

  deletePerson(): void {
    this.peopleService.delete(this.idPerson).subscribe(
      data => {
        this.router.navigate(['/']);
        return false;
      },
      error => console.log)
  }

  getForm(model:any): FormGroup {
  this.form = this.fb.group({
    id: [model.id],
    name: [model.name, [Validators.required]],
    lastname: [model.lastname, [Validators.required]],
    email: [model.email, [Validators.required]],
    description: [model.description, [Validators.required]],
  });
  this.chargeImg = model.photo;
    return this.form;
  }

  processFile(imageInput: any) {
    this.selectedImage = imageInput.files[0];
  }

  savePerson() {
    if (this.form.valid){
      let data: any = this.form.value;
      const formData = new FormData();

      for (let key in data){
          const element = data[key];
          formData.append(key, element);
      }
      if (this.selectedImage){
        formData.append('photo', this.selectedImage)
      }
      if (this.idPerson){
        this.peopleService.update(this.idPerson, formData).subscribe(res => {
          this.router.navigate(['/'])
        })
      }else{
        this.peopleService.create(formData).subscribe(res => {
          this.router.navigate(['/'])
        })
      }

    }
  }
}

