import { Component, OnInit, Input } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { FotoService } from '../services/foto.service';
import { FotoComponent } from '../foto/foto.component';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent implements OnInit {

    title = 'Caelum Avanade PIC';
    listaFotos: FotoComponent[];


    constructor(private service: FotoService) {
      this.service.listar().subscribe(
        fotoApi => this.listaFotos = fotoApi
      );
      // this.listaFotos = conexaoApi.get('http://localhost:3000/v1/fotos');
    }


  ngOnInit() { }


  deletar(foto) {
    console.log('FOTO_ID EXCLUIDO: ' + JSON.stringify(foto.id));
    this.service.deletar(foto)
      .subscribe(
        () => {
        this.listaFotos = this.listaFotos.filter(
            fotoDaLista => {
                if (fotoDaLista !== foto ) {
                  return fotoDaLista;
                }
            });
        },
        erro => {
          console.log(erro);
        });
    }


}
