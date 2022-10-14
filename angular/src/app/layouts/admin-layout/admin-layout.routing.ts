import { Routes } from '@angular/router';
import { ListeClientComponent } from '../../pages/liste-client/liste-client.component';
import { AddClientComponent } from '../../pages/add-client/add-client.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { ListeProductsComponent } from '../../pages/liste-products/liste-products.component';
import { EditPersonComponent } from '../../pages/edit-person/edit-person.component';
import { EditProduitComponent } from '../../pages/edit-produit/edit-produit.component';
import { ListeCommandeComponent } from '../../pages/liste-commande/liste-commande.component';
import { CommandeComponent } from '../../pages/commande/commande.component';
import { EditCommandeComponent } from '../../pages/edit-commande/edit-commande.component';





export const AdminLayoutRoutes: Routes = [
    { path: 'addperson',        component:AddClientComponent },
    { path: 'addproduct',        component:ProductsComponent },
    { path: 'editclient',        component:EditPersonComponent },
    { path: 'editproduct',        component:EditProduitComponent },
    { path: 'listeclient',        component:ListeClientComponent },
    { path: 'listeproduit',        component:ListeProductsComponent },
    { path: 'listeorder',        component:ListeCommandeComponent },
    { path: 'addorder',        component:CommandeComponent },
    { path: 'editorder',        component:EditCommandeComponent },

];
