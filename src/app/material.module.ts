import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatGridListModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatGridListModule
    ]
})
export class MaterialModule { }