import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UploadJsonComponent } from './components/upload-json/upload-json.component';
import { NgModule } from '@angular/core';
import { MainDialogComponent } from './components/main-dialog/main-dialog.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', title:'Home', component: MainDialogComponent },
  {path: 'uploadJson', title:'UploadJson', component: UploadJsonComponent},
  {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
