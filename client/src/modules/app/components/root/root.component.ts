import { Component, OnInit } from '@angular/core';
import { BlurService } from '../../services/blur.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  isBlurActive: boolean;

  constructor(private readonly blurService: BlurService) {}

  ngOnInit(): void {
    this.blurService.onBlurChange.subscribe(isActive => (this.isBlurActive = isActive));
  }
}
