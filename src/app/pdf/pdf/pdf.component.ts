import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/service/pdf.service';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  info: any = {
    eps: "Promonorte Ips",
    direccion: "Calle 17 # 18 23",
    telefono: "(605) 3855032",
    nit: "802023344-1",
    noHistoria: "124587845 - 1455555",
    lugarAtencion: "Promonorte Ips",
    fechaImpresion: new Date(),
    text1: "CitaSalud",
    logo: "https://www.previsalud.com.co/wp-content/uploads/2022/01/Previsalud-Logo-PNG.png",
  }

  paciente: any = {
  }

  signos: any = {
  }

  diagnostico: any;

  tratamiento: any ;

  profesional: any = {
    nombre: "diego enrique pacativa luna",
    tarjeta: "1090448248",
    cargo: "profesional"
  }

  constructor(
    private PdfService: PdfService,
    private ruta: ActivatedRoute,
    private router: Router,
  ) { }

  version: number = 0;
  documento: number = 0;
  cita_num: number = 0;
  oid: number = 0;
  loading: boolean = false;
  dataPaciente: any;

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    if(this.ruta.snapshot.params){
      this.version = this.ruta.snapshot.params?.['version'];
      this.documento = this.ruta.snapshot.params?.['documento'];
      this.cita_num = this.ruta.snapshot.params?.['cita'];
      this.oid = this.ruta.snapshot.params?.['oid'];
    }

    this.dataPaciente = {
      documento: this.documento,
      version: this.version,
      num_cita: this.cita_num,
      oid: this.oid
    }

    this.cargaPdf();
  }

  cargaPdf() {
    this.loading = true;
    this.getDataUser();
    this.getHistoria();
    this.getDiagnosticos();
    this.getFisico();
    this.getAntecedentes();
    this.getSignos();
    this.getOrdenamientos();
    this.getMedicamentos();
    this.getIncapacidad();
    this.loading = false;
  }

  getDataUser(){
    this.PdfService.pacienteData(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.paciente = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  consulta: any;
  getHistoria(){
    this.PdfService.getHistoria(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.consulta = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  getDiagnosticos(){
    this.PdfService.getDiagnosticos(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.diagnostico = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  fisico: any;
  getFisico(){
    this.PdfService.getFisico(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.fisico = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  antecedentes: any;
  getAntecedentes(){
    this.PdfService.getAntecedentes(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.antecedentes = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  getSignos(){
    this.PdfService.getSignos(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.signos = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  ordenamientos: any;
  getOrdenamientos(){
    this.PdfService.getOrdenamientos(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.ordenamientos = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  medicamentos: any;
  getMedicamentos(){
    this.PdfService.getMedicamentos(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.medicamentos = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  incapacidad: any;
  getIncapacidad(){
    this.PdfService.getIncapacidad(this.dataPaciente).subscribe({
      next: (req: any) => {
        this.incapacidad = req.data;
      },
      error: (err: string) => {
        console.log(err, 'error');
      }
    })
  }

  download() {
    this.loading = true;
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 1
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfWidth2 = doc.internal.pageSize.getWidth() - 10 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth2) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`HitoriaClinica${this.documento}_${this.cita_num}.pdf`);
      this.loading = false;
    });
  }
}
