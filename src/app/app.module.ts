import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule, MatCardModule, MatGridListModule, MatButtonModule,
MatToolbarModule, MatIconModule, MatDialogModule, MatBottomSheetModule, MatListModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { OperatorComponent } from './operator/operator.component';
import { SocketService } from './services/socket.service';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    TicketComponent,
    UserComponent,
    CreateTicketComponent,
    CreateUserComponent,
    BottomSheetComponent,
    OperatorComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  entryComponents: [ErrorComponent, BottomSheetComponent],
  providers: [MatNativeDateModule, MatDatepickerModule, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
