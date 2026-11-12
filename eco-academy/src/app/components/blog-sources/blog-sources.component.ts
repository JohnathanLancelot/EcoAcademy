import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blog-sources',
  imports: [],
  templateUrl: './blog-sources.component.html',
  styleUrl: './blog-sources.component.css'
})
export class BlogSourcesComponent {
  sources = input<string[]>();
}
