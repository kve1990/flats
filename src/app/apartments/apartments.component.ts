import { Component, OnInit } from '@angular/core';

import { ApartmentsService } from 'app/services/apartments.service';

@Component({
    selector: 'apartment-list',
    templateUrl: 'app/apartments/apartments.component.html',
    styleUrls: ['app/apartments/apartments.component.css'],
    providers: [ ApartmentsService ]
})
export class ApartementsComponent implements OnInit {
    message: string;
    list: any[];
    constructor(private apartmentsService: ApartmentsService) { }

    ngOnInit() {
        this.message = "I'm is apartments component";
        this.apartmentsService.getList().subscribe(res => {
            this.list = res;
            this.list.forEach(function(item){
                item.img = `assets/img/building/${item.building_id}_photo_m_${item.img_photo.split(' ')[0]}`;
            });
        });
        
    }
}