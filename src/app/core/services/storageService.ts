export interface StorageService {
    getValue: (key: string) => string;
    setValue: (key: string, value: string) => void;
}