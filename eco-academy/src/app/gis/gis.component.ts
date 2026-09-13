import { Component } from '@angular/core';
import { BackComponent } from '../back/back.component';
import { BlogComponent } from '../blog/blog.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeworkComponent } from '../homework/homework.component';

@Component({
  selector: 'app-gis',
  imports: [BackComponent, BlogComponent, FooterComponent, HomeworkComponent],
  templateUrl: './gis.component.html',
  styleUrl: './gis.component.css'
})
export class GisComponent {

}
