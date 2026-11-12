import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Subjects {
  id: number;
  name: string;
  created_at: string;
  image_url: string | null;
  alt_text: string | null;
  slug: string | null;
}

export interface Back_Buttons {
  id: number;
  name: string;
  created_at: string;
  image_url: string | null;
  alt_text: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/subjects';

  getItems(): Observable<Subjects[]> {
    return this.http.get<Subjects[]>(this.apiUrl);
  }
}