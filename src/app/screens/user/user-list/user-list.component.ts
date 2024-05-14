import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { UserItemComponent } from "./user-item/user-item.component";
import { UserService } from '../../../shared/services/user.service';
import { UserI } from '../../../shared/interfaces/user.interface';
import { TableModule } from 'primeng/table';
import { TableComponent } from "../../../shared/components/table/table.component";
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { PaginationDataI } from '../../../shared/interfaces/pagination.interface';

@Component({
    selector: 'MD-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UserItemComponent, TableModule, PaginationComponent]
})
export class UserListComponent {

    cd = inject(ChangeDetectorRef);
    userService = inject(UserService);
    paginationData!: PaginationDataI;
    users!: UserI[];
    page = 1;

    ngOnInit(): void {

        this.getUsers();
    }
    getUsers() {
        this.userService.getUsers(this.page).subscribe({
            next: (res: any) => {
                this.users = res.data;
                console.log(this.users);
                this.paginationData = {
                    page: res.page, total: res?.total, total_pages: res?.total_pages,
                    per_page: res?.per_page
                };

                this.cd.detectChanges();

            }, error: (err: any) => {
                console.log(err);

            }
        })
    }

    onPageChange(newPage: number) {
        this.page = newPage
        this.getUsers();
    }
}
