import { Component, OnInit } from '@angular/core';
import { IUnidadMedida } from '../Interfaces/iunidadmedida';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../theme/shared/shared.module';
import { UnidadmedidaService } from '../Services/unidadmedida.service';

@Component({
  selector: 'app-unidadmedida',
  standalone: true,
  imports: [RouterLink, SharedModule],
  templateUrl: './unidadmedida.component.html',
  styleUrl: './unidadmedida.component.scss'
})
export class UnidadmedidaComponent implements OnInit {
  listaunidades: IUnidadMedida[] = [];
  constructor(private unidadServicio: UnidadmedidaService) {}
 // ... (resto del código)

cargarTabla() {
  this.unidadServicio.todos().subscribe((data) => {
    this.listaunidades = data;
  });
}

ngOnInit(): void {
  this.cargarTabla();
}
  
  eliminar(idUnidad_Medida: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta unidad de medida?')) {
      // Se llama al servicio para eliminar la unidad
      this.unidadServicio.eliminar(idUnidad_Medida).subscribe(() => {
        // Actualizar la lista local eliminando la unidad
        this.listaunidades = this.listaunidades.filter(unidad => unidad.idUnidad_Medida !== idUnidad_Medida);
      });
    }
  }
  
  
}
