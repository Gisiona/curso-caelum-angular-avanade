
//#region ComponentesDoAngular - Imports
import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
//#endregion Imports ComponentesDoAngular - Imports

//#region MeusComponentes - Imports
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../services/foto.service';
//#endregion MeusComponentes - Imports

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

   foto = new FotoComponent();
   mensagem = {
     texto: '',
     tipo: '',
     _id: 0
   };

    constructor( private service: FotoService) { }

    ngOnInit() {
    }

    /*
    salvar() {
      this.conexaoApi.post('http://localhost:3000/v1/fotos/', this.foto)
      .subscribe(
        resposta => {
          this.mensagem.texto =  ' Foto cadastrada com sucesso... ' + this.foto.titulo;
          this.mensagem.tipo = 'success';
          console.log(resposta);
        },
        erro => {
          this.mensagem.texto = 'OPS... algo deu ruim. Tente novamente mais tarde.';
          this.mensagem.tipo = 'danger';
          console.log(erro);
        }
      );

     console.log(this.foto);
    }
    */

   salvar() {
            this.service.cadastrar(this.foto)
            .subscribe(
                resposta => {
                  this.mensagem.texto =  ' Foto cadastrada com sucesso... ' + this.foto.titulo;
                  this.mensagem.tipo = 'success';
                  console.log(resposta);
                },
                erro => {
                  this.mensagem.texto = 'OPS... algo deu ruim. Tente novamente mais tarde.';
                  this.mensagem.tipo = 'danger';
                  console.log(erro);
                });
    }


    deletar() {
    this.service.deletar(this.foto)
    .subscribe(
      resposta => {
        this.mensagem.texto =  ' Foto removida com sucesso... ' + this.foto.titulo;
        this.mensagem.tipo = 'success';
        console.log(resposta);
      },
      erro => {
        this.mensagem.texto = 'OPS... algo deu ruim ao excluir foto. Tente novamente mais tarde.';
        this.mensagem.tipo = 'danger';
        console.log(erro);
      });
    }
}
