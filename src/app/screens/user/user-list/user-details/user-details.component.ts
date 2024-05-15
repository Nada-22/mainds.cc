import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { CommonModule } from '@angular/common';
import { UserI } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class UserDetailsComponent {

  cd = inject(ChangeDetectorRef);
  userService = inject(UserService);
  @Input() id = 0;
  user!:UserI;

  ngOnInit(): void {
    this.getUserDetails()
  }
  getUserDetails(){
    this.userService.getUserDetails(this.id).subscribe((data) => {
      this.user=data.data;
      this.cd.detectChanges()
      
    })
  }
}
