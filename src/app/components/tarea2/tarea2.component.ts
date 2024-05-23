import { Component } from '@angular/core';
import { Tasks } from '../../domain/Tasks';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tarea2',
  standalone: true,
  imports: [],
  templateUrl: './tarea2.component.html',
  styleUrl: './tarea2.component.css'
})
export class Tarea2Component {
  
  tasks : Tasks = new Tasks()
  task : any

  constructor(private tareasService: TareasService){}

  ngOnInit(){
    this.tareasService.getTasks().then(data => {
      this.task = data.docs.map((doc: any) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    })
  }
}
