import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { LastikOtelService } from '../../services/lastik-otel.service';
import { MessageService } from 'primeng/api';
import { LastikOtel } from 'src/app/models/LastikOtel';

@Component({
  selector: 'app-lastik-otel',
  templateUrl: './lastik-otel.component.html',
  styleUrls: ['./lastik-otel.component.scss'],
  providers: [MessageService]
})
export class LastikOtelComponent implements OnInit {
  loading: boolean = true;
  constructor(private lastikOtelService: LastikOtelService, private messageService: MessageService) { }
  async ngOnInit() {
    this.lastikOtelService.getLastikBilgileriListesi().subscribe(response => {
      debugger;
      this.lastikOtels = (response);
      console.log(this.lastikOtels);
      this.loading = false;

      console.log("adsfasdfadsfadsfdas");

      this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'aracPlaka', header: 'Arac Plaka' },
        { field: 'lastikTipi', header: 'lastikTipi' },
        { field: 'lastikBoyut', header: 'lastikBoyut' },
        { field: 'tckn', header: 'tckn' },
        { field: 'adSoyad', header: 'adSoyad' },
        { field: 'ucret', header: 'ucret' },
        { field: 'birakmaTarihi', header: 'birakmaTarihi' },
        { field: 'almaTarihi', header: 'almaTarihi' },
        { field: 'lastikYeri', header: 'lastikYeri' },
        { field: 'aktif', header: 'aktif' }
      ];


    });

  }
  datas = [];
  //lastikOtels=this.datas

  lastikOtelDialog: boolean = false;
  deletelastikOtelDialog: boolean = false;

  deletelastikOtelsDialog: boolean = false;


  lastikOtels: LastikOtel[] = [];
  lastikOtel: LastikOtel = {
    id: null,
    aracPlaka: null,
    lastikTipi: null,
    lastikBoyut: null,
    tckn: null,
    adSoyad: null,
    ucret: null,
    birakmaTarihi: null,
    almaTarihi: null,
    lastikYeri: null,
    aktif: null,
  }

  lastikOtelDuzenle: LastikOtel = {
    id: null,
    aracPlaka: null,
    lastikTipi: null,
    lastikBoyut: null,
    tckn: null,
    adSoyad: null,
    ucret: null,
    birakmaTarihi: null,
    almaTarihi: null,
    lastikYeri: null,
    aktif: null,
  }

  data: any[] = [];

  selectedlastikOtels: LastikOtel[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];




  openNew() {
    this.lastikOtel = {
      id: null,
    aracPlaka: null,
    lastikTipi: null,
    lastikBoyut: null,
    tckn: null,
    adSoyad: null,
    ucret: null,
    birakmaTarihi: null,
    almaTarihi: null,
    lastikYeri: null,
    aktif: null,
    }

    this.submitted = false;
    this.lastikOtelDialog = true;
  }

  deleteSelectedlastikOtels() {
    //this.deletelastikOtelsDialog = true;
  }

  editlastikOtel(lastikOtel: LastikOtel) {
    this.lastikOtel = lastikOtel
    this.lastikOtelDuzenle = lastikOtel
    this.lastikOtelDialog = true;
  }

  deletelastikOtel(lastikOtel: LastikOtel) {
    //this.deletelastikOtelDialog = true;
    // this.lastikOtels = lastikOtel;
  }

  confirmDeleteSelected() {
    //this.deletelastikOtelsDialog = false;
    //this.lastikOtel = this.lastikOtel.filter(val => !this.selectedlastikOtels.includes(val));
    // this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Günler Silindi', life: 3000 });
    //this.selectedlastikOtels = [];
  }

  confirmDelete() {

  }

  hideDialog() {
    this.lastikOtelDialog = false;
    this.submitted = false;
  }

  saveLastikOtel() {
    if (this.lastikOtel.id) {
      this.lastikOtelService.lastikbilgisikaydetDuzenle(this.lastikOtel);


      this.lastikOtels.forEach((element,index)=>{
        if(element.id==this.lastikOtel.id) delete  this.lastikOtels[index];
     });

      this.lastikOtels.push(this.lastikOtel);
      this.lastikOtel = {
        id: null,
      aracPlaka: null,
      lastikTipi: null,
      lastikBoyut: null,
      tckn: null,
      adSoyad: null,
      ucret: null,
      birakmaTarihi: null,
      almaTarihi: null,
      lastikYeri: null,
      aktif: null,
      };

      this.hideDialog();

      
    }
    else{
debugger;
      this.lastikOtelService.lastikbilgisikaydet3(this.lastikOtel);
      this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kayıt Başarılı', life: 3000 });
      this.lastikOtels.push(this.lastikOtel);
      this.lastikOtel = {
        id: null,
      aracPlaka: null,
      lastikTipi: null,
      lastikBoyut: null,
      tckn: null,
      adSoyad: null,
      ucret: null,
      birakmaTarihi: null,
      almaTarihi: null,
      lastikYeri: null,
      aktif: null,
      };

      this.hideDialog();
    }

  }





  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }}