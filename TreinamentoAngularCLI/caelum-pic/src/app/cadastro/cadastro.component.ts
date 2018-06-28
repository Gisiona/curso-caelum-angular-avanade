
//#region ComponentesDoAngular - Imports
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//#endregion Imports ComponentesDoAngular - Imports

//#region MeusComponentes - Imports
import { FotoComponent } from '../foto/foto.component';
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
     tipo: ''
   };

    constructor(private conexaoApi: HttpClient ) { }

    ngOnInit() {
    }

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
}
