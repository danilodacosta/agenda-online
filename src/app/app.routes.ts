import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AgendamentoComponent} from './agendamento/agendamento.component';
import { PrestadoresComponent } from './prestadores/prestadores.component';

export const ROUTES: Routes = [
    { path: '' , component: HomeComponent },
    { path: 'empreendimentos' , component: EmpreendimentosComponent },
    {path: 'empreendimentos/:id', component: PrestadoresComponent},
    {path: 'agendamento', component: AgendamentoComponent}
];
