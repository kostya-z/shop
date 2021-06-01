import { Injectable } from '@angular/core';
import { genID } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private generatorID = genID();

  constructor() { }

  generate (n: number): string {
    
    let result = '';
    
    const symbolsSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let index = 0; index < n; index++) {

      result += symbolsSet.charAt(Math.floor(Math.random() * symbolsSet.length));
    }
    
    return result;
  }

  getNewID(): number {
    
    return this.generatorID.next().value;
  }
}
