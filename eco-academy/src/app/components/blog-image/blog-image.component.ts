import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blog-image',
  imports: [],
  templateUrl: './blog-image.component.html',
  styleUrl: './blog-image.component.css'
})
export class BlogImageComponent {
  url = input.required<string>();
  alt = input.required<string>();
  caption = input<string>();
}
