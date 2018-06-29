
import { Component , Input} from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../services/foto.service';



@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styles: []
})

export class CardComponent {
    @Input() foto: FotoComponent;

    constructor(private service: FotoService) {}

    deletar() {
        console.log('FOTO_ID EXCLUIDO: ' + this.foto.id);

        this.service.deletar(this.foto)
        .subscribe(
          resposta => {
            console.log(resposta);
          },
          erro => {
            console.log(erro);
          });
        }
}
