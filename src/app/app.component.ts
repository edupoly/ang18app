import { ChangeDetectionStrategy, Component, provideZoneChangeDetection, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = signal('ang18app')

  counter=120;
  constructor(){
    setTimeout(()=>{
      this.counter++;
      this.title.set("This is crazy")
    },1000)
  }
  inc(){
    this.counter++;
  }
}
