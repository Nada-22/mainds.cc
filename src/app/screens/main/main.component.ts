import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AppState } from '../../state/app.state';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,RouterModule,LoaderComponent,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  appState=inject(AppState);
  cd = inject(ChangeDetectorRef);

}
