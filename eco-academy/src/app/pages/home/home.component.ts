import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private subjectsService = inject(SubjectsService);

  subjects = toSignal(this.subjectsService.getItems(), { initialValue: [] });
}