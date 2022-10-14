import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cote-client/header/header.component';
import { SideBarComponent } from './cote-client/side-bar/side-bar.component';
import { SideChatComponent } from './cote-client/side-chat/side-chat.component';
import { HomeClientComponent } from './cote-client/home-client/home-client.component';
import { AddPostComponent } from './cote-client/add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAdminComponent } from './dashboard-admin/header-admin/header-admin.component';
import { SideBarAdminComponent } from './dashboard-admin/side-bar-admin/side-bar-admin.component';
import { HomeAdminComponent } from './dashboard-admin/home-admin/home-admin.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCollaborationComponent } from './collaboration-admin/add-collaboration/add-collaboration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SuccessComponent } from './success/success.component';
import { OptaComponent } from './opta/opta.component';
import { RoomComponent } from './opta/room/room.component';
import { TimeslotComponent } from './opta/timeslot/timeslot.component';
import { CompetitionComponent } from './opta/competition/competition.component';
import { MonitorComponent } from './monitor/monitor.component';
import { AddOfferComponent } from './collaboration-admin/add-offer/add-offer.component';
import { ViewCollaborationComponent } from './collaboration-admin/view-collaboration/view-collaboration.component';
import { EditCollaborationComponent } from './collaboration-admin/edit-collaboration/edit-collaboration.component';
import { ListOffersComponent } from './collaboration-admin/list-offers/list-offers.component';
import { ListCollaborationOffersComponent } from './collaboration-admin/list-collaboration-offers/list-collaboration-offers.component';
import { EditOfferComponent } from './collaboration-admin/edit-offer/edit-offer.component';
import { ViewOfferComponent } from './collaboration-admin/view-offer/view-offer.component';
import { OffersComponent } from './collaboration-client/offers/offers.component';
import { ReservationComponent } from './collaboration-client/reservation/reservation.component';
import { AddPublibtyComponent } from './collaboration-admin/add-publibty/add-publibty.component';
import { ListPublicityComponent } from './collaboration-admin/list-publicity/list-publicity.component';
import { PublicityComponent } from './collaboration-client/publicity/publicity.component';
import { ListCollaborationComponent } from './collaboration-admin/list-collaboration/list-collaboration.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SideChatComponent,
    HomeClientComponent,
    AddPostComponent,
    HeaderAdminComponent,
    SideBarAdminComponent,
    HomeAdminComponent,
    ListCollaborationComponent,
    AddCollaborationComponent,
    RegisterComponent,
    UserlistComponent,
    DetailComponent,
    UpdateUserComponent,
    LoginComponent,
    UserLoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SuccessComponent,
    OptaComponent,
    RoomComponent,
    TimeslotComponent,
    CompetitionComponent,
    MonitorComponent,
    AddOfferComponent,
    ViewCollaborationComponent,
    AddCollaborationComponent,
    EditCollaborationComponent,
    ListOffersComponent,
    ListCollaborationOffersComponent,
    EditOfferComponent,
    ViewOfferComponent,
    OffersComponent,
    ReservationComponent,
    AddPublibtyComponent,
    ListPublicityComponent,
    PublicityComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxStarRatingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
