import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApartmentsService } from '../services/apartments.service';

@Component({
    selector: 'apartment-detail',
    template: `
        <div class="panel panel-primary" *ngIf="flat">
            <div class="panel-heading">
                <div class="panel-title">
                    <h2>Flat Page</h2>
                </div>
            </div>

            <div class="panel-body">
                <h3>
                    {{flat.room_count}}-комнтатная 
                    {{flat.area}}м<sup>2</sup>
                    ({{ flat.price_total }}руб)
                </h3>
                <hr>

                <h4>Характеристики</h4>
                <div class="row">
                    <div class="col-md-6">
                        <table class="table">
                            <tr>
                                <td>Стадия строительства:</td>
                                <td>{{flat.stage}}</td>
                            </tr>
                            <tr>
                                <td>Площадь:</td>
                                <td>{{flat.area}}</td>
                            </tr>
                            <tr>
                                <td>Количество комнат:</td>
                                <td>{{flat.room_count}}</td>
                            </tr>
                            <tr>
                                <td>Этаж:</td>
                                <td>{{flat.floor}}</td>
                            </tr>
                            <tr>
                                <td>Цена за м<sup>2</sup>:</td>
                                <td>{{flat.price_area}}</td>
                            </tr>
                            <tr>
                                <td>Застройщик:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Государственная поддержка:</td>
                                <td>{{flat.gov_support}}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="col-md-6">
                        <div>
                            <h4>Картинки</h4>
                            <div *ngFor="let img of flat_img">
                                <img [src]='img' class="img-responsive">
                            </div>
                        </div>

                        <div>
                            <h4>Cхемы</h4>
                                <div *ngFor="let img of flat_layout">
                                    <img [src]='img' class="img-responsive">
                                </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="panel-footer">
                <button routerLink="/detail/{{flat.building_id}}" class="btn btn-default">Back</button>
            </div>
        </div>
    `,
    providers: [ApartmentsService]
})
export class FlatComponent implements OnInit {
    flat: any;
    flat_img: string[];
    flat_layout: string[];
    constructor(private _route: ActivatedRoute, private apartmentsService: ApartmentsService) {
    }

    ngOnInit() {
        this.apartmentsService.getFlat(this._route.snapshot.params['id'])
            .subscribe( res => {
                this.flat = res[0];
                this.flat_img = this.flat.img_photo
                    .split(' ')
                    .map( photo => photo ? `assets/img/flat/${this.flat.flat_id}_photo_r_${photo}` : '');
                this.flat_layout = this.flat.img_layout
                    .split(' ')
                    .map( photo => photo ? `assets/img/flat/${this.flat.flat_id}_layout_r_${photo}` : '');
            });
    }
}
