import { InjectionToken } from '@angular/core';
import {StorageService} from './storageService';

export const LocalStorage = {
    getValue: (key: string) => window.localStorage.getItem(key),
    setValue: (key: string, value: string) => window.localStorage.setItem(key, value)
};

export const LocalStorageService = new InjectionToken<StorageService>('Local storage service');