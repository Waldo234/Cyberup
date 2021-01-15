import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import Swal from 'sweetalert2'; 

declare var paypal;

@Component({
  selector: 'app-details-pc',
  templateUrl: './details-pc.component.html',
  styleUrls: ['./details-pc.component.css']
})
export class DetailsPcComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement : ElementRef;

  producto = {
    descripcion : 'producto en venta',
    precio      : 599.99,
    img         : 'imagen de tu producto'
  }
  title = 'angular-paypal-payment';

  constructor() { }

  ngOnInit(){
    paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.producto.descripcion,
              amount     :{
                currency_code: 'MXN',
                value        : this.producto.precio
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
        
      },
      onError: err =>{
        console.log(err);
        
      }
    })
    .render( this.paypalElement.nativeElement );

  }
  showModal(){
  Swal.fire({
    title: 'Conectando!',
    text: 'Espere un momento.',
    imageUrl: '/assets/3p.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}
showModal1(){
  Swal.fire({
    title: 'Pago Oxxo!',
    text: 'Copia estos numeros.',
    imageUrl: '/assets/12.jpeg',
    imageWidth: 500,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}
showModal2(){
  Swal.fire({
    title: 'Pago SPEI!',
    text: 'Escanea el siguiente codigo QR.',
    imageUrl: '/assets/13.jpeg',
    imageAlt: 'Custom image',
  })
}

}