import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent{
  constructor(private titleService: Title) {
    this.titleService.setTitle('Maha Fathy - Resume');
  }
   download() {
 
}
  };

