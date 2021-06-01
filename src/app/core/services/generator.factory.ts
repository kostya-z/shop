import { GeneratorService } from './generator.service';
import { InjectionToken } from '@angular/core';


export function generatorFactory(length: number): any {
    
    return function (generator: GeneratorService): string {
        return generator.generate(length);
    } 
}

export const generatedString = new InjectionToken<string>('generatedString');