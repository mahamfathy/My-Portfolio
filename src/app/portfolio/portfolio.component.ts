import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { Project } from '../shared/models/Project';
import { Tag } from '../shared/models/Tag';
import { ProjectsService } from '../services/projects.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  typescript: boolean = false;
  angular: boolean = false;
  geolocation: boolean = false;
  api: boolean = false;
  bootstrap: boolean = false;
  filtering = false;
  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Maha Fathy - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  Filter() {
    let filterTags: Tag[] = [];
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }
    if (this.geolocation) {
      filterTags.push(Tag.GEOLOCATION);
    }
    if (this.api) {
      filterTags.push(Tag.API);
    }
    if (this.angular || this.bootstrap || this.geolocation || this.typescript) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.api = false;
    this.bootstrap = false;
    this.angular = false;
    this.geolocation = false;
    this.typescript = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
