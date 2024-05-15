import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { PaginationDataI } from '../../interfaces/pagination.interface';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() paginationData!:PaginationDataI
  first: number = 1;
  rows: number = 10;
  @Output() pageChange=new EventEmitter<number>()

  ngOnInit(): void {

    
  }
  onPageChange(currentPage: any) {
    
    this.pageChange.emit(currentPage+1)
    
  }

}
