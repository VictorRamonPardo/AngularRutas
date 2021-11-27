import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EnlaceComponent } from './components/enlace/enlace.component';
import { ErrorComponent } from './components/error/error.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PrimerHijoComponent } from './components/primerHijo/primerHijo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SegundoHijoComponent } from './components/segundoHijo/segundoHijo.component';

@NgModule({
    declarations: [
        AppComponent,
        NavegacionComponent,
        EnlaceComponent,
        PrincipalComponent,
        PrimerHijoComponent,
        SegundoHijoComponent,
        ErrorComponent,
    ],
    imports: [BrowserModule, routing],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
