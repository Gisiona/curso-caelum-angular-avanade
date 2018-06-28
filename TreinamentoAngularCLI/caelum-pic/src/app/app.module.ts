import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { CardModule } from './card/card.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ModuloRoteamento } from './app.routes';
import { MensagemComponent } from './mensagem/mensagem.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpClientModule,
    CardModule,
    ModuloRoteamento,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
