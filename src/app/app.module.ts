import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { RouterModule } from '@angular/router';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { PrestadoresComponent } from './prestadores/prestadores.component';
import { HorariosDisponiveisComponent } from './prestadores/horarios-disponiveis/horarios-disponiveis.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './home/chat/chat.component';
import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { EmpreendimentoDetalheComponent } from './empreendimentos/empreendimento-detalhe/empreendimento-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgendamentoComponent,
    ClinicasComponent,
    PrestadoresComponent,
    HorariosDisponiveisComponent,
    HomeComponent,
    ChatComponent,
    EmpreendimentosComponent,
    EmpreendimentoDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
