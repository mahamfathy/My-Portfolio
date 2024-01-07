import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent{
  constructor(private titleService: Title) {
    this.titleService.setTitle('Maha Fathy - Resume');
  }
   download(fileContent: string) {
    const a = document.createElement("a");

    a.style.display = "none";
    a.href = `data:application/pdf;base64,${fileContent}`;
    a.download = "Maha Fathy (Front-end-developer).pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
  };

