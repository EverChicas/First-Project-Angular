import { Component } from '@angular/core';

@Component({
    selector: 'nuevo-component',
    templateUrl: './nuevo-component.component.html'
})

export class NuevoComponent{
    public title: string;
    public descripcion: string;
    public day: string;
    public month: string;
    public year: string;

    constructor(){
        this.title = "Primer proyecto con angular";
        this.descripcion = "Hacer un sitio basico con el uso de angular";
        this.day = "Jueves 21";
        this.month = "Mayo";
        this.year = "2020";
    }
}