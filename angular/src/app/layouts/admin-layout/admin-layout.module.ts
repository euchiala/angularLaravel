import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AddClientComponent } from '../../pages/add-client/add-client.component';
import { ListeClientComponent } from '../../pages/liste-client/liste-client.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { ListeProductsComponent } from '../../pages/liste-products/liste-products.component';
import { EditPersonComponent } from '../../pages/edit-person/edit-person.component';
import { EditProduitComponent } from '../../pages/edit-produit/edit-produit.component';
import { ListeCommandeComponent } from '../../pages/liste-commande/liste-commande.component';
import { CommandeComponent } from '../../pages/commande/commande.component';
import { EditCommandeComponent } from '../../pages/edit-commande/edit-commande.component';


FullCalendarModule.registerPlugins([
  timeGridPlugin,
  dayGridPlugin,
  listPlugin,
  interactionPlugin
])
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule,
    NgbModule,
    ClipboardModule,
    Ng2SearchPipeModule,
],
  declarations: [
   
    AddClientComponent,
    ListeClientComponent,
    ProductsComponent,
    ListeProductsComponent,
    EditPersonComponent,
    EditProduitComponent,
    CommandeComponent,
    ListeCommandeComponent,
    EditCommandeComponent,
  ], 
})
export class AdminLayoutModule {}
