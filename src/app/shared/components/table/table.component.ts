import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'mainds-table',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
@Input() items:any;
@Input() cols!:any[];
@Input() itemActions=false;

@ContentChild('tpl1', { static: false }) templateRef_1: TemplateRef<any> | null = null;

}
