import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CointableDataSource } from './cointable-datasource';

@Component({
  selector: 'cointable',
  templateUrl: './cointable.component.html',
  styleUrls: ['./cointable.component.css']
})
export class CointableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CointableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new CointableDataSource(this.paginator, this.sort);
  }
}
