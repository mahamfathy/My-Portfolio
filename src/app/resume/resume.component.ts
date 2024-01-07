import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {

   fileContent = "Resume.pdf";
   blob = new Blob([this.fileContent], { type: 'text/plain' })

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Maha Fathy - Resume');
  }
  DownloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.href=window.URL.createObjectURL(this.blob)
    link.download="Maha Fathy (Front-end-developer).pdf";
    link.click();
  }
}
