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
  fileContent = "%PDF-1.3\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> /ProcSet 5 0 R >> /Contents 6 0 R >>\nendobj\n4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n5 0 obj\n<< /PDF /Text >>\nendobj\n6 0 obj\n<< /Length 52 >>\nstream\nBT\n/F1 12 Tf\n72 712 Td\n(Hello, this is a PDF file) Tj\nET\nendstream\nendobj\nxref\n0 7\n0000000000 65535 f\n0000000010 00000 n\n0000000056 00000 n\n0000000119 00000 n\n0000000198 00000 n\n0000000275 00000 n\n0000000363 00000 n\ntrailer\n<< /Root 1 0 R /Size 7 >>\nstartxref\n430\n%%EOF";
  blob = new Blob([this.fileContent], { type: 'application/pdf' });

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Maha Fathy - Resume');
  }
  DownloadFile() {
    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'target', '_blank');
    this.renderer.setAttribute(link, 'href', window.URL.createObjectURL(this.blob));
    this.renderer.setAttribute(link, 'download', 'Maha Fathy (Front-end-developer).pdf');
    this.renderer.appendChild(document.body, link);
    link.click();
    this.renderer.removeChild(document.body, link);
  }
}
