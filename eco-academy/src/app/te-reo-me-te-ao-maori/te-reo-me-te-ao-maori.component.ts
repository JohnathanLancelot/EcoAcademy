import { Component } from '@angular/core';
import { BackComponent } from '../back/back.component';
import { BlogComponent } from '../blog/blog.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeworkComponent } from '../homework/homework.component';

@Component({
  selector: 'app-te-reo-me-te-ao-maori',
  imports: [BackComponent, BlogComponent, FooterComponent, HomeworkComponent],
  templateUrl: './te-reo-me-te-ao-maori.component.html',
  styleUrl: './te-reo-me-te-ao-maori.component.css'
})
export class TeReoMeTeAoMaoriComponent {

}