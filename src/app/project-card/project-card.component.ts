import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Project } from '../shared/models/Project';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, CarouselModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit, AfterViewInit {
  @Input() project = {} as Project;
  @ViewChild('myModal') myModal!: ElementRef;
  visible: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  openModal() {
    this.visible = true;
  }
  closeModal() {
    this.visible = false;
  }
}
