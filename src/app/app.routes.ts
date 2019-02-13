import { Routes } from '@angular/router';
import { AgendamentoComponent} from './agendamento/agendamento.component';

export const ROUTES: Routes = [
    { path: '' , component: AgendamentoComponent },
    { path: 'agendamento' , component: AgendamentoComponent }
];
