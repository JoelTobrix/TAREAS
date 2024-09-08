import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iproveedor } from 'src/app/Interfaces/iproveedor';
import { IUnidadMedida } from 'src/app/Interfaces/iunidadmedida';
import { Iiva } from 'src/app/Interfaces/Iiva';
import { ProveedorService } from 'src/app/Services/proveedores.service';
import { UnidadmedidaService } from 'src/app/Services/unidadmedida.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IvaService } from 'src/app/Services/iva.service';
@Component({
  selector: 'app-nuevoproducto',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule], // Verifica que ReactiveFormsModule esté aquí
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.scss']
})

export class NuevoproductoComponent implements OnInit {
  listaUnidadMedida: IUnidadMedida[] = [];
  listaProveedores: Iproveedor[] = [];
  listaIva: Iiva[]=[];
  titulo = '';
  frm_Producto: FormGroup;

  constructor(
    private unidadServicio: UnidadmedidaService,
    private fb: FormBuilder,
    private proveedorServicio: ProveedorService,
    private ivaServicio: IvaService,
  ) {}

  ngOnInit(): void {
    this.unidadServicio.todos().subscribe((data) => (this.listaUnidadMedida = data));
    this.proveedorServicio.todos().subscribe((data) => (this.listaProveedores = data));
    this.ivaServicio.todos().subscribe((data)=> (this.listaIva = data));
    
    // Crear el formulario al cargar el componente
    this.crearFormulario();
  }

  crearFormulario() {
    this.frm_Producto = this.fb.group({
      Codigo_Barras: ['', Validators.required],
      Nombre_Producto: ['', Validators.required],
      Graba_IVA: ['', Validators.required],
      Unidad_Medida_idUnidad_Medida: ['', Validators.required],
      IVA_idIVA: ['', Validators.required],  // Aquí el campo IVA
      Cantidad: ['', [Validators.required, Validators.min(1)]],
      Valor_Compra: ['', [Validators.required, Validators.min(0)]],
      Valor_Venta: ['', [Validators.required, Validators.min(0)]],
      Proveedores_idProveedores: ['', Validators.required]
    });
  }

  grabar() {
    if (this.frm_Producto.valid) {
      const nuevoProducto = this.frm_Producto.value;
      console.log('Producto a grabar:', nuevoProducto);
      // Aquí puedes agregar la lógica para guardar el producto (enviar a tu backend o API)
    } else {
      console.log('El formulario no es válido');
    }
  }
}

    /*
1.- Modelo => Solo el procedieminto para realizar un select
2.- Controador => Solo el procedieminto para realizar un select
3.- Servicio => Solo el procedieminto para realizar un select
4.-  realizar el insertar y actualizar

*/
