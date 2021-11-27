import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-parametros',
    templateUrl: './parametros.component.html',
})
export class ParametrosComponent implements OnInit {
    public id: number = 0;
    constructor(activeRoute: ActivatedRoute) {
        activeRoute.params.subscribe((params) => {
            this.id = params['id'];
        });
    }

    ngOnInit() {}
}
