import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfComponent } from './pdf/pdf/pdf.component';

const routes: Routes = [
  { path : "pdf/:version/:documento/:cita/:oid", component: PdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
