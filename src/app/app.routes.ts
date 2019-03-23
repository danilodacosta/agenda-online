import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AgendamentoComponent} from './agendamento/agendamento.component';
import { PrestadoresComponent } from './prestadores/prestadores.component';

export const ROUTES: Routes = [
    { path: '' , component: HomeComponent },
    { path: 'empreendimentos' , component: AgendamentoComponent },
    {path: 'empreendimentos/:id', component: PrestadoresComponent}
];
