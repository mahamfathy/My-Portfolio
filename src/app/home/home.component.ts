import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../shared/models/Project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  imageUrl = './../assets/avatar.jpg';
  imageTitle = 'Profile Picture';
  imageStyle: any = {
    width: '220px',
    height: '220px',
  };
  featureProject = {} as Project;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Maha Fathy - Home');
  }
  ngOnInit(): void {
    this.featureProject = this.projectService.GetProjectById(0);
  }
}
