import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back',
  imports: [RouterLink],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
  // Accepts the dynamic image URL from whichever parent page uses <app-back>
  imageUrl = input<string | null>(null);
  altText = input<string>('Back button');
}
