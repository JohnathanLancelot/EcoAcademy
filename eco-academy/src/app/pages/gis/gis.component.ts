import { Component } from '@angular/core';
import { BackComponent } from '../../components/back/back.component';
import { BlogComponent, HeaderImageData } from '../../components/blog/blog.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeworkComponent } from '../../components/homework/homework.component';

@Component({
  selector: 'app-gis',
  imports: [BackComponent, BlogComponent, FooterComponent, HomeworkComponent],
  templateUrl: './gis.component.html',
  styleUrl: './gis.component.css'
})
export class GisComponent {
  gisHeaderImage: HeaderImageData = {
    url: 'assets/images/icons/GIS.png',
    alt: 'GIS icon.'
  };
}
