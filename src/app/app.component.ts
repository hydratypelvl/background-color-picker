import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bg-changer';
  colors = ['#f54266', '#4257f5', '#34d97e', '#d93476', '#e3e3e3'];
  bgColor = '#d93476';
  colorsStorageKey = 'Background Color';

  constructor(private storageService: StorageService) { 
    this.bgColor=
    storageService.getData(this.colorsStorageKey) || this.bgColor;
  }
  
  bgChange(color){
    this.storageService.setData(this.colorsStorageKey, color);
    this.bgColor = this.storageService.getData(this.colorsStorageKey)
  }

  handleChange($event: ColorEvent) {
    this.storageService.setData(this.colorsStorageKey, $event.color.hex);
    this.bgColor = this.storageService.getData(this.colorsStorageKey)
  }
}
