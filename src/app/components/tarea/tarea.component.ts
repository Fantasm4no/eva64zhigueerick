import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tasks } from '../../domain/Tasks';
import { FormsModule } from '@angular/forms';
import { Tarea2Component } from '../tarea2/tarea2.component';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [FormsModule, Tarea2Component],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  
  tasks : Tasks = new Tasks()

  constructor(private tareasService: TareasService){}

  guardar(){
    this.tareasService.addTask(this.tasks)
  }

}
