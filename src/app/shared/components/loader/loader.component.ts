import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppState } from '../../../state/app.state';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

  appState=inject(AppState);
  cd = inject(ChangeDetectorRef);

}
