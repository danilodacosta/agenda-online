import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgendamentoComponent,
    ClinicasComponent,
    PrestadoresComponent,
    HorariosDisponiveisComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
