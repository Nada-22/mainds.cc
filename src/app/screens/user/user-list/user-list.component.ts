import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { UserItemComponent } from "./user-item/user-item.component";
import { UserService } from '../../../shared/services/user.service';
import { UserI } from '../../../shared/interfaces/user.interface';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'MD-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
    imports: [UserItemComponent,TableModule],
    changeDetection:ChangeDetectionStrategy.OnPush

})
export class UserListComponent {
    
  cd = inject(ChangeDetectorRef);
userService= inject(UserService);
users!:UserI[];
cols = [
    { field: 'id', header: 'ID' },
    { field: 'first_name', header: 'Name' },
    { field: 'email', header: 'email' },
   
]
ngOnInit(): void {

    this.getUsers();
}
getUsers(){
    this.userService.getUsers(1).subscribe({
        next:(res:any)=>{
            this.users=res.data;
            console.log(this.users);
            this.cd.detectChanges()
            
        },error:(err:any)=>{
            console.log(err);
            
        }
    })
}
}
