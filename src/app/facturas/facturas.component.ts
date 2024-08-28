import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { IFactura } from '../Interfaces/factura';
import { Router, RouterLink } from '@angular/router';
import { FacturaService } from '../Services/factura.service';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.scss'
})
export class FacturasComponent implements OnInit {
  listafacturas: IFactura[] = [];
  constructor(private facturaServicio: FacturaService) {}
  ngOnInit(): void {
    this.facturaServicio.todos().subscribe((data: IFactura[]) => {
      this.listafacturas = data;
    });
  }

  eliminar(idFactura: number) {
    if (confirm('¿Estás seguro de eliminar esta factura?')) {
      this.facturaServicio.eliminar(idFactura)
          .subscribe(
              () => {
                  // Actualizar la lista de facturas después de la eliminación
                  this.listafacturas = this.listafacturas.filter(factura => factura.idFactura !== idFactura);
                  alert('Factura eliminada correctamente');
              },
              (error) => {
                  console.error('Error al eliminar la factura:', error);
                  alert('Ocurrió un error al eliminar la factura. Por favor, inténtalo nuevamente.');
              }
          );
        }
  }
}