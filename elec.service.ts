import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecService {
  getarray1()
  {
    return ["23.4","23.5","23.6","23.7","23.8","23.9","24"];
  }
  getarray2()
  {
    return ["33.4","33.5","33.6","33.7","33.8","33.9","34"];
  }
  constructor() { }
}
