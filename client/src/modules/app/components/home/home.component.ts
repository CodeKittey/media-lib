import { Component, OnInit } from '@angular/core';
import { WasmService } from '../../../shared/services/wasm.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
    fibnum$: Observable<Number>;

    constructor(private readonly wasmService: WasmService) {}

    ngOnInit(): void {
        this.fibnum$ = this.wasmService.fibonacci(20);
    }
}
