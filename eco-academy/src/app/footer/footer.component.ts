import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerText = input(
    'Website created by Johnathan Worrall in 2026. Images on this page (not including those with captions) were generated using Gemini AI.'
  );
}
