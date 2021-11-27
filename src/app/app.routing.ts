import { RouterModule, Routes } from '@angular/router';
import { EnlaceComponent } from './components/enlace/enlace.component';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { PrimerHijoComponent } from './components/primerHijo/primerHijo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SegundoHijoComponent } from './components/segundoHijo/segundoHijo.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'enlace', component: EnlaceComponent },
    { path: 'parametros/:id', component: ParametrosComponent },
    {
        path: 'anidadas',
        component: PrincipalComponent,
        children: [
            { path: 'primerhijo', component: PrimerHijoComponent },
            { path: 'segundohijo', component: SegundoHijoComponent },
        ],
    },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: 'error' },
];

export const routing = RouterModule.forRoot(routes);
