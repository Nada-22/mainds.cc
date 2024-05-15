import { ChangeDetectionStrategy, ChangeDetectorRef, Component, SimpleChanges, inject } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { UserI } from '../../../shared/interfaces/user.interface';
import { TableModule } from 'primeng/table';
import { TableComponent } from "../../../shared/components/table/table.component";
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { PaginationDataI } from '../../../shared/interfaces/pagination.interface';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CustomSearchPipe } from '../../../shared/pipes/custom-search.pipe';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { UserState } from '../../../state/user.state';

@Component({
    selector: 'MD-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
         TableModule,RouterModule,
        PaginationComponent, IconFieldModule,
        InputIconModule, CustomSearchPipe,
        FormsModule, InputTextModule
    ]
})
export class UserListComponent {

    cd = inject(ChangeDetectorRef);
    userService = inject(UserService);
    userState = inject(UserState);

    paginationData!: PaginationDataI;
    users!: UserI[];
    page = 1;
    perPage=6;

    searchItem = ''
    ngOnInit(): void {

        this.getUsers();
        
    }
    getUsers() {
        this.userService.getUsers(this.page).subscribe({
            next: (res: any) => {
                this.users = res.data;
                this.paginationData = {
                    page: res.page, total: res?.total, total_pages: res?.total_pages,
                    per_page: res?.per_page
                };

                this.userState.setUsers(this.users);
                this.cd.detectChanges();

            }, error: (err: any) => {

            }
        })
    }

    onPageChange(newPage: number) {
        this.page = newPage
        this.getUsers();
    }

    searchUsers(value:string){
        let newUsers=this.users.filter((data: UserI)=>{
            return data.id.toString().includes(value);
        });
        
        this.paginationData = {
            page: 1, total: newUsers.length, total_pages: Number((newUsers.length/this.perPage).toFixed(0)) || 1,
            per_page: this.perPage
        };
    this.userState.setUsers(newUsers);
    this.cd.detectChanges()

    }
}
