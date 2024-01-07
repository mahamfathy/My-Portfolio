import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
githubLink = '//github.com/mahamfathy';
linkedInLink= 'https://www.linkedin.com/in/maha-fathy-40801b1b5/'
  constructor(private titleService: Title) {
    this.titleService.setTitle('Maha Fathy - Contact');
  }
  imageStyle = { width: '32px', height: '32px' };
  emailAddress: string = 'mailto:mahafathyh@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20there,';

}
