import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from './module/Reclamation'; // Define the Reclamation interface as needed

@Injectable({
  providedIn: 'root',
})
export class ReclamationService {
  private apiUrl = 'http://localhost:8089/reclamation';

  constructor(private http: HttpClient) {}

  getAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(
      `${this.apiUrl}/retrieve-all-reclamation`
    );
  }

  addReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(
      `${this.apiUrl}/add-reclamation`,
      reclamation
    );
  }

  getReclamation(idRec: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(
      `${this.apiUrl}/retrieve-reclamation/${idRec}`
    );
  }

  removeReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-reclamation/${id}`);
  }

  modifyReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(
      `${this.apiUrl}/modify-reclamation`,
      reclamation
    );
  }

  deleteReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-reclamation/${id}`);
  }

  updateReclamationStatus(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(
      `${this.apiUrl}/update-reclamation-status/${reclamation.idRec}`,
      reclamation
    );
  }

  calculateWeeklyReclamations(): Observable<number[]> {
    return this.http.get<number[]>(
      `${this.apiUrl}/calculate-weekly-reclamations`
    );
  }

  affecterRecAUser(
    reclamationId: number,
    userId: number
  ): Observable<Reclamation> {
    return this.http.put<Reclamation>(
      `${this.apiUrl}/affecterRecAUser/${reclamationId}/${userId}`,
      null
    );
  }
}
