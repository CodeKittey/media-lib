import { Component, OnInit } from '@angular/core';
import { WasmService } from '../../../shared/services/wasm.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
    fibonacciResultNumber$: Observable<Number>;

    constructor(private readonly wasmService: WasmService) {}

    ngOnInit(): void {
        this.fibonacciResultNumber$ = this.wasmService.fibonacci(11);
    }
}
