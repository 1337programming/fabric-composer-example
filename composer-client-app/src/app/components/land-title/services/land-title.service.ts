import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../../services/data.service';
import { LandTitle } from '../../../net.biz.digitalAccentureNetwork';

// Can be injected into a constructor
@Injectable()
export class LandTitleService {
  private NAMESPACE: string = 'net.biz.digitalAccentureNetwork.LandTitle';
  
  constructor(private dataService: DataService<LandTitle>) {
  };
  
  public getAll = (): Observable<LandTitle[]> => {
    return this.dataService.getAll(this.NAMESPACE);
  }
  
  public getAsset = (id: any): Observable<LandTitle> => {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }
  
  public addAsset = (itemToAdd: any): Observable<LandTitle> => {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }
  
  public updateAsset = (id: any, itemToUpdate: any): Observable<LandTitle> => {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }
  
  public deleteAsset = (id: any): Observable<LandTitle> => {
    return this.dataService.delete(this.NAMESPACE, id);
  }
  
}
