import { Injectable, InjectionToken, Inject } from '@angular/core';
import { ConstantModel } from '../models/constant.model';

export const ConstantsService = new InjectionToken<ConstantModel>('demo constant');

export const ConstantsServiceConst: ConstantModel = {
  ver: '2.0',
  app: 'TaskManager 2'
};
