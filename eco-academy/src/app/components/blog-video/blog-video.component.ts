import { Component, input, computed, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-video',
  imports: [],
  templateUrl: './blog-video.component.html',
  styleUrl: './blog-video.component.css'
})
export class BlogVideoComponent {
  private sanitizer = inject(DomSanitizer);
  url = input.required<string>();
  caption = input<string>();
  safeUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url())
  );
}
