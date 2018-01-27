
//  common
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// material
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    // MatCardModule
  } from '@angular/material';


// services
import { AuthGuard } from 'AuthGuard';
import { AuthService } from 'AuthService';
import { ElectronService } from './providers/electron.service';
import { ShowErrorsComponent } from 'app/components/shared/show-errors/show-errors.component';
import { LabeledInputComponent } from 'app/components/shared/labeled-input/labeled-input.component';


//  directives


// pipes


// somponents


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        // MatCardModule
    ],
    declarations: [
        LabeledInputComponent,
        ShowErrorsComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LabeledInputComponent,
        ShowErrorsComponent,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        // MatCardModule
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthGuard,
                ElectronService,
                AuthService
            ]
        };
    }
}
