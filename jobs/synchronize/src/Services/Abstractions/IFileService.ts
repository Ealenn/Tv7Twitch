export interface IFileService {
  save(obj: any, path: string): Promise<void>;
}
