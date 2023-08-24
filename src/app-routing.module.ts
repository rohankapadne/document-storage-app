import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { LoginComponent } from './app/login/login.component';
import { authGuard } from './app/auth.guard';
import { DocumentDetailsComponent } from './app/document-details/document-details.component';
import { DocumentResolver } from './app/document-resolver.service';
import { DocumentUploadComponent } from './app/document-upload/document-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'document/:id',
    component: DocumentDetailsComponent,
    canActivate: [authGuard],
    resolve: { document: DocumentResolver },
  },
  {
    path: 'upload',
    component: DocumentUploadComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
