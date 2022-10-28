import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class PdfService extends BaseService {
  private apiUrl: string = '/historias/';
  constructor(@Inject('UrlApi') baseUrl: string, private http: HttpClient) {
    super(baseUrl);
  }

  pacienteData(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "paciente?documento="+data.documento+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar datos del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getHistoria(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "historia?documento="+data.documento+"&num_cita="+data.num_cita+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar historia del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getDiagnosticos(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "diagnosticos?documento="+data.documento+"&num_cita="+data.num_cita+"&oid="+data.oid+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar diagnostico del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getFisico(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "examenFisico?documento="+data.documento+"&num_cita="+data.num_cita+"&oid="+data.oid+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar examen fisico del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getAntecedentes(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "antecendentes?documento="+data.documento+"&num_cita="+data.num_cita+"&oid="+data.oid+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar antecedentes del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getSignos(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "signosVitales?documento="+data.documento+"&num_cita="+data.num_cita+"&oid="+data.oid+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar signos del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getOrdenamientos(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "ordenamientos?documento="+data.documento+"&num_cita="+data.num_cita+"&oid="+data.oid+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar ordenamientos del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getMedicamentos(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "medicamentos?documento="+data.documento+"&num_cita="+data.num_cita+"&oid="+data.oid+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar medicamentos del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

  getIncapacidad(data:any): Observable<any> {
    return this.http
      .get<any>(this._baseUrl + this.apiUrl + "incapacidades?documento="+data.documento+"&num_cita="+data.num_cita+"&oid="+data.oid+"&ver="+data.version)
      .pipe(
        map((response) => response),
        tap((a) => {
          this.logs('consultar icapacidades del paciente');
          this.logs(a);
        }),
        catchError(this.errorMgmt)
      );
  }

}
