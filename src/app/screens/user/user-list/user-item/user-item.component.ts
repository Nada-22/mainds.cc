import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { UserI } from '../../../../shared/interfaces/user.interface';


@Component({
  selector: 'MD-user-item',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
@Input() user!:UserI;
}
