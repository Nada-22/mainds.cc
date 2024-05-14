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

    console.log(this.paginationData);
    
  }
  onPageChange(currentPage: any) {
    console.log(currentPage);
    
    this.pageChange.emit(currentPage+1)
    

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    console.log(this.paginationData);

  }
}
