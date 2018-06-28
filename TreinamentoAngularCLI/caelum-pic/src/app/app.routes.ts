
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const rotasApp: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', redirectTo: '' } // caso nao encontre nenhuma rota será redirecionado para home
];


export const ModuloRoteamento = RouterModule.forRoot(rotasApp);
