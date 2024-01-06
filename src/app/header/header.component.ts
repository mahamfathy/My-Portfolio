import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  githubLink = '//github.com/mahamfathy';
  linkedInLink='https://www.linkedin.com/in/maha-fathy-40801b1b5/'

}
