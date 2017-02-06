import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApartmentsService } from '../services/apartments.service';

@Component({
    selector: 'apartment-detail',
    template: `
        <div class="panel panel-primary" *ngIf="item">
            <div class="panel-heading">
                <div class="panel-title">
                    <h2>{{item.caption}}</h2>
                </div>
            </div>

            <div class="panel-body">
                <h4>Описание</h4>
                <p>{{item.description}}</p>
                <div class="row">

                    <div class="col-md-6">
                        <h4>Картинки</h4>
                        <div class="row">
                            <div *ngFor="let img of item_img" class="col-md-4">
                                <img [src]='img' class="img-responsive">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <h4>Cхемы</h4>
                        <div class="row">
                            <div *ngFor="let img of item_layout" class="col-md-4">
                                <img [src]='img' class="img-responsive">
                            </div>
                        </div>
                    </div>

                </div>

                <table *ngIf="flats && flats.length" class="table">
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>Stage</th>
                        <th>Area</th>
                        <th>Price area</th>
                        <th>Price total</th>
                        <th>Floor</th>
                        <th>Room count</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr *ngFor="let flat of flats; let i = index;">
                        <td>{{i + 1}}</td>
                        <td>{{flat.stage}}</td>
                        <td>{{flat.area}}</td>
                        <td>{{flat.price_area}}</td>
                        <td>{{flat.price_total}}</td>
                        <td>{{flat.floor}}</td>
                        <td>{{flat.room_count}}</td>
                        <td>
                            <button  routerLink="/flat/{{flat.flat_id}}" class="btn btn-primary">Detail</button>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>

            <div class="panel-footer">
                <button routerLink="/" class="btn btn-default">Back</button>
            </div>
        </div>
    `,
    providers: [ApartmentsService]
})
export class DetailComponent implements OnInit {
    item: any;
    item_img: string[];
    item_layout: string[];
    flats: any;
    constructor(private _route: ActivatedRoute, private apartmentsService: ApartmentsService) {
    }

    ngOnInit() {
        this.apartmentsService.getItem(this._route.snapshot.params['id'])
            .subscribe( res => {
                this.item = res[0];
                this.item_img = this.item.img_photo
                    .split(' ')
                    .map( photo => `assets/img/building/${this.item.building_id}_photo_r_${photo}`);
                this.item_layout = this.item.img_layout
                    .split(' ')
                    .map( photo => `assets/img/building/${this.item.building_id}_layout_r_${photo}`);
            });

        this.apartmentsService.getFlats(this._route.snapshot.params['id'])
            .subscribe( res => {
                this.flats = res;
                console.log(this.flats);
            });
    }
}
