import { Observable } from 'rxjs';
import { todoDTO } from '../models/types/to-do.model';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class TodoPort {
  public abstract getList(): Observable<todoDTO[]>;
  public abstract getDetail(id: number): Observable<todoDTO>;
}
