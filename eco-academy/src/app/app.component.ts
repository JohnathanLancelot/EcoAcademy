import { Component } from '@angular/core';
import { BackComponent } from './back/back.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [BackComponent, BlogComponent, FooterComponent, HomeComponent, HomeworkComponent,
     RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eco Academy';
}
