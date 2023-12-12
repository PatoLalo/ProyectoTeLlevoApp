import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list-choferes',
    loadChildren: () => import('./list-choferes/list-choferes.module').then( m => m.ListChoferesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detalle-chofer/:id',
    loadChildren: () => import('./detalle-chofer/detalle-chofer.module').then( m => m.DetalleChoferPageModule)
  },
  {
    path: 'contactar/:id',
    loadChildren: () => import('./contactar/contactar.module').then( m => m.ContactarPageModule)
  },
  {
    path: 'login-driver',
    loadChildren: () => import('./login-driver/login-driver.module').then( m => m.LoginDriverPageModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'list-recorridos',
    loadChildren: () => import('./list-recorridos/list-recorridos.module').then( m => m.ListRecorridosPageModule)
  },
  {
    path: 'qr-example',
    loadChildren: () => import('./qr-example/qr-example.module').then( m => m.QrExamplePageModule)
  },
  {
    path: 'map-example',
    loadChildren: () => import('./map-example/map-example.module').then( m => m.MapExamplePageModule)
  },
  {
    path: 'destino',
    loadChildren: () => import('./destino/destino.module').then( m => m.DestinoPageModule)
  },
  {
    path: 'perfil-chofer',
    loadChildren: () => import('./perfil-chofer/perfil-chofer.module').then( m => m.PerfilChoferPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
