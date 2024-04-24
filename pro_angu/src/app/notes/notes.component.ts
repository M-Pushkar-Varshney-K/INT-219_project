import { Component,OnInit,  Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit{
  sub: HTMLElement | null = null; 
  note:HTMLElement | null = null;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.sub = this.el.nativeElement.querySelector('#sub');
    this.note = this.el.nativeElement.querySelector('#notes');
  }

  showSubjects() {
    if (this.note && this.sub) {
      // Use Renderer2 to hide the elements
      this.renderer.setStyle(this.note, 'display', 'none');
      this.renderer.setStyle(this.sub, 'display', 'none');
    }
  }
}
