import { InjectionToken } from '@angular/core';
import { ConstantModel } from './constant.model';

export const configToken = new InjectionToken<ConstantModel>('demo token');
