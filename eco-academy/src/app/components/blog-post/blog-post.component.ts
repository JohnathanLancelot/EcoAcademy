import { Component, input } from '@angular/core';
import { BlogImageComponent } from '../blog-image/blog-image.component';
import { BlogVideoComponent } from '../blog-video/blog-video.component';
import { BlogSourcesComponent } from '../blog-sources/blog-sources.component';

// Blocks of content:
export type PostBlock =
  | { type: 'text'; html: string }
  | { type: 'image'; url: string; alt: string, caption: string }
  | { type: 'video'; url: string; caption: string }

// Defining the shape of a blog post:
export interface PostData {
  date: string;
  title: string;
  blocks: PostBlock[];
  sources?: string[];
}

@Component({
  selector: 'app-blog-post',
  imports: [
    BlogImageComponent,
    BlogVideoComponent,
    BlogSourcesComponent
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  post = input.required<PostData>();
}