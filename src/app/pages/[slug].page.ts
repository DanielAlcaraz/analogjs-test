import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post()) {
    <article>
      <analog-markdown [content]="post()?.content" />
    </article>
    }
  `,
})
export default class HomeComponent {
  readonly post$ = injectContent();
  post = toSignal(this.post$);
}
