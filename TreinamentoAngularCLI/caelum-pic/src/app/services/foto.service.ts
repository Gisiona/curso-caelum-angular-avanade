
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';



const BASE_URL = 'http://localhost:3000/';
const BARRA_URL = '/';


@Injectable({
    providedIn: 'root'
})
export class FotoService {

    private url = `${ BASE_URL }v1/fotos`;

    constructor(private conexaoApi: HttpClient) {}

    listar(): Observable<FotoComponent[]> {
        this.consoleLog();
        return this.conexaoApi.get<FotoComponent[]>(this.url);
    }

    private consoleLog() {
        console.log(this.conexaoApi.get<FotoComponent[]>(this.url));
    }

    cadastrar(foto): Observable<Object> {

                return this.conexaoApi.post(this.url, foto);
    }

    deletar(foto): Observable<Object> {
        console.log(foto._id);
        return this.conexaoApi.delete(this.url + BARRA_URL + foto._id);
    }

    alterar(foto): Observable<Object> {
        return this.conexaoApi.post(this.url , foto);
    }

    listarPorId(foto): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(this.url + BARRA_URL + foto._id);
    }

}
