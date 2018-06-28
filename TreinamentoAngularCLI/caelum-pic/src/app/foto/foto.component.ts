
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-foto',
    template: `<img [src]="url" [alt]="titulo" class="card-img-top" style="min-height:230px">`,
    styles: ['']
})

export class FotoComponent {


  @Input() titulo = 'CURSO DE ANGULAR 5 AVANADE.';
  @Input() url = '../assets/img/foto.png';
  @Input() descricao = '';

}
