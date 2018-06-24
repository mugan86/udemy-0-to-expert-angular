import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'result-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  
  @Input() totalPages: number;
  @Input() currentPage: number;
  listPages:number [] = [];
  constructor() { }
  ngOnInit(): void {
    this.renderPagination();
  }
  renderPagination() {
    this.listPages = [];
    console.log(this.totalPages);
    console.log(this.currentPage);
    if (this.totalPages > 10) {
      console.log('Add special pagination');
      this.listPages = [
        1,
        2,
        -1,
        this.totalPages - 1,
        this.totalPages
      ];
    } else {
      console.log('Basic pagination');
      
      this.listPages = Array.from(Array(10).keys());
    }

    console.log(this.listPages);
  }

}
