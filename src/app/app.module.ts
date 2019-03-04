import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SettingsComponent } from './template/settings/settings.component';
import { MenuComponent } from './template/menu/menu.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { RouterModule } from '@angular/router';
import { ClinicasComponent } from './components/clinicas/clinicas.component';
import { PrestadoresComponent } from './components/prestadores/prestadores.component';
import { HorariosDisponiveisComponent } from './components/prestadores/horarios-disponiveis/horarios-disponiveis.component';

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
