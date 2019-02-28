import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuComponent } from './menu/menu.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { RouterModule } from '@angular/router';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { PrestadoresComponent } from './clinicas/prestadores/prestadores.component';
import { HorariosDisponiveisComponent } from './clinicas/prestadores/horarios-disponiveis/horarios-disponiveis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    AgendamentoComponent,
    ClinicasComponent,
    PrestadoresComponent,
    HorariosDisponiveisComponent
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
