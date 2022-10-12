import { Component, OnInit } from '@angular/core';

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
    fechaImpresion: "2022-25-12 14:45:00",
    text1: "CitaSalud",
    logo: "https://saludsocial.com.co/wp-content/uploads/2022/02/logo-salud-social-sin-isotipo.png",
  }

  paciente: any = {
    sexo: "M",
    fechaNacimiento: "-----",
    edad: "64",
    grupoSangre: "-----",
    estadoCivil: "-----",
    lugarResidencia: "-----",
    barrio: "-----",
    direccion: "Calle 23 # 23-35 Avenida 9 #",
    telefono: "5834918",
    etnia: "-----",
    empresa: "-----",
    cita: "1176407",
    tipoUsuario: "-----",
    tipoAfiliado: "-----",
    estrato: "-----",
    fechaCita: "-----",
    fechaAtencion: "-----",
    fechaSalida: "-----",
  }

  consulta: any = {
    motivo: "control de rcv",
    enfermedad: "SE ATIENDE LA CONSULTA PRESENCIAL UTILIZANDO (EP) ELEMENTOS DE PROTECCION PERSONAL COMPLETOS, INGRESA PACIENTES POR SUS PROPIOS MEDIOS - PARA CONTROL DEL RIESGO CARDIOVASCULAR - PACIENTE MASCULINO DE 64 AÑOS DE EDAD - CON ANTECEDENTES DE: DIABETES MELLITUS - ENFERMEDAD RENAL CRONICA - HIPERTENSION ARTERIAL - CARDIOMIOPATIA ISQUEMICA - NIEGA FIEBRE - NIEGA TOS - NIEGA DOLOR DE GARGANTA - NIEGA DISNEA - NIEGA CONGESTION NASAL - NIEGA DIFICULTAD RESPIRATORIA - NIEGA ALGUN CONTACTO CON UN CASO CONFIRMADO DE COVID 19 EN LOS ULTIMOS 14 DIAS - NIEGA ALGUN CONTACTO CON PERSONAS QUE HAYA VIAJADO AL EXTERIOR CON RIESGO DE COVID 19 EN LOS ULTIMOS 14 DIAS - REFIERE BUENA ADHERENCIA Y TOLERANCIA AL TRATAMIENTO FARMACOLOGICO - NIEGA SINTOMAS DE DESCOMPENSACION CARDIOVASCULAR ASOCIADA - NIEGA HOSPITALIZACIONES EN EL ULTIMO MES - NO TIENE EXAMENES PENDIENTE PARA REVISAR."
  }

  signos: any = {
    hemoclasificacion: "-----",
    rh: "-----",
    ta: "-----",
    glas: "-----",
    fc: "-----",
    peso: "-----",
    imc: "-----",
    sup: "-----",
    tam: "-----",
    talla: "-----",
  }

  diagnostico: any = "E118 DIABETES MELLITUS NO INSULINO DEPENDIENTE CON COMPLICACIONS NO ESPECIFICADAS"

  tratamiento: any = "- ESTABLE - SIN MENCION DE COMPLICACION DE SUS PATOLOGIAS DE RCV. - PACIENTE NEGATIVO PARA SINTOMATOLOGIA RESPIRATORIA. - SE INDICA TRATAMIENTO POR TRES MESES. - PROXIMO CONTROL SEGUN PROGRAMA. - SE DAN RECOMENDACIONES SOBRE: HASITOS DE VIDA SALUDABLE, ALIMENTACION, REALIZAR EJERCICIO ACORDE A LA EDAD, LA IMPORTANCIA DE LA ADHERENCIA AL TRATAMIENTO, TOMA DE MEDICAMENTOS SEGUN FORMULA MEDICA, NO AUTOMEDICARSE. - SE INDICAN SIGNOS DE ALARMA SOBRE SUS PATOLOGIAS DE BASE: CEFALEA INTENSA, PERDIDA DE SIMETRIA FACIAL PERDIDA DE LA FUERZA, LENGUAJE INCOHERENTE, DOLOR EN EL PECHO EN DADO CASO ACUDIR INMEDIATAMENTE AL SERVICIO DE URGENCIAS. - SE DAN RECOMENDACIONES Y MEDIDAS PREVENTIVAS PARA EL CORONAVIRUS. AISLAMIENTO SOCIAL PREVENTIVO, USO DE TAPABOCAS, LAVADO DE MANOS RECURRENTE, ENTRE OTROS. - SE DAN SIGNOS DE ALARMA RESPIRATORIOS: SI PRESENTA FIEBRE, DIFICULTAD RESPIRATORIA, RESPIRACIÓN MÁS RÁPIDA, SI EL PECHO LE SUENA O LE DUELE AL RESPIRAR. SOMNOLENCIA, DETERIORO DEL ESTADO GENERAL EN FORMA RÁPIDA, ASISTIR AL SERVICIO DE URGENCIAS PARA ATENCION MÉDICA INMEDIATA - REFIERE ENTENDER Y ESTAR DE ACUERDO.";

  profesional: any = {
    nombre: "diego enrique pacativa luna",
    tarjeta: "1090448248",
    cargo: "profesional"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
