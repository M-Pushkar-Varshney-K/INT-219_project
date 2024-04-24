import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { SubNotesComponent } from './sub-notes/sub-notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotesComponent, PdfViewerComponent, SubNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pro_angu';
}
