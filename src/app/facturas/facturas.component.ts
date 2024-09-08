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
    this.facturaServicio.eliminar(idFactura).subscribe(
      () => {
        // Eliminación exitosa
        this.listafacturas = this.listafacturas.filter(factura => factura.idFactura !== idFactura);
      },
      (error) => {
        // Manejar error
        console.error('Error al eliminar la factura:', error);
        // Puedes mostrar un mensaje de error al usuario aquí
      }
    );
  }




}
  

