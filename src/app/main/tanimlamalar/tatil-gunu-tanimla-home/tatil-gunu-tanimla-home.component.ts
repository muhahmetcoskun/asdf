import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { tatilGunu } from 'src/app/models/tatilgunu.model';
import { TatilgunutanimlaserviceService } from '../services/tatilgunutanimlaservice.service';
import { Table } from 'primeng/table';
import { TatilGun } from 'src/app/models/tatilgun';
@Component({
  selector: 'app-tatil-gunu-tanimla-home',
  templateUrl: './tatil-gunu-tanimla-home.component.html',
  styleUrls: ['./tatil-gunu-tanimla-home.component.scss'],
  providers: [MessageService]
})
export class TatilGunuTanimlaHomeComponent implements OnInit {
  loading: boolean = true;
  constructor(private ttgtService: TatilgunutanimlaserviceService, private messageService: MessageService) { }
  async ngOnInit() {
    this.ttgtService.getTatilGunleri().subscribe(response => {
      debugger;
      this.tatilGunus = [(response)];
      console.log(this.tatilGunus);
      this.loading = false;


      // this.selectedtatilGunus= await this.ttgtService.tatilGunleriListesiGetir(null, null);
      //console.log(this.selectedtatilGunus);
      console.log("adsfasdfadsfadsfdas");

      this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'tarih', header: 'Tarih' },
        { field: 'aktif', header: 'Aktif' }
      ];


    });

  }
  datas = [];
  //tatilGunus=this.datas

  tatilGunuDialog: boolean = false;
  deletetatilGunuDialog: boolean = false;

  deletetatilGunusDialog: boolean = false;


  tatilGunus: TatilGun[] = [];
  customers1: tatilGunu[] = [];
  tatilGunu: TatilGun = {
    id: null,
    tarih: null,
    aktif: null,
  }

  data: any[] = [];

  selectedtatilGunus: tatilGunu[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];




  openNew() {
    this.tatilGunu = {
      id: null,
      tarih: null,
      aktif: null,
    }

    this.submitted = false;
    this.tatilGunuDialog = true;
  }

  deleteSelectedtatilGunus() {
    //this.deletetatilGunusDialog = true;
  }

  edittatilGunu(tatilGunu: tatilGunu) {
    //this.tatilGunus = tatilGunu
    //this.tatilGunuDialog = true;
  }

  deletetatilGunu(tatilGunu: tatilGunu) {
    //this.deletetatilGunuDialog = true;
    // this.tatilGunus = tatilGunu;
  }

  confirmDeleteSelected() {
    //this.deletetatilGunusDialog = false;
    //this.tatilGunu = this.tatilGunu.filter(val => !this.selectedtatilGunus.includes(val));
    // this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Günler Silindi', life: 3000 });
    //this.selectedtatilGunus = [];
  }

  confirmDelete() {

  }

  hideDialog() {
    this.tatilGunuDialog = false;
    this.submitted = false;
  }

  savetatilGunu() {


  }





  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}


