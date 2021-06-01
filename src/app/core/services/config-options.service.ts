import { Injectable } from '@angular/core';

import { ConfigModel } from '../models/config.model';


@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configItem: ConfigModel = new ConfigModel ();

  constructor() { 

  }

  getConfig(): ConfigModel {

    return this.configItem;
  }

  setConfig(newConfig: Partial<ConfigModel>): void {
    
    this.configItem = {...this.configItem, ...newConfig};
    
    console.log('this.configItem: ' + this.configItem);
  }

}
