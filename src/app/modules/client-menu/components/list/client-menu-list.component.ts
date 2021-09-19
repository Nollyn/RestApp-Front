import { Component, Input, OnInit } from '@angular/core';
import { MenusModel } from '@app/models/menus.model';
import { CategoriesModel } from "@app/models/categories.model";

@Component({
  selector: 'app-client-menu-list',
  templateUrl: './client-menu-list.component.html',
  styleUrls: ['./client-menu-list.component.scss']
})
export class ClientMenuListComponent implements OnInit {

  @Input() menu: MenusModel;

  categories: CategoriesModel[] = [
    {id: 1, name: 'One', description: ''},
    {id: 2, name: 'Two', description: ''},
    {id: 3, name: 'Three', description: ''}
  ];

  dishes = [
    {title: 'First', price: '123', idCategory: 1},
    {title: 'Second', price: '123', idCategory: 2},
    {title: 'Third', price: '123', idCategory: 1},
    {title: 'Four', price: '123', idCategory: 2},
    {title: 'Five', price: '123', idCategory: 1},
    {title: 'Six', price: '123', idCategory: 3},
  ];

  constructor() {
  }

  ngOnInit(): void {
    // this.cats = this.menu.dishes.filter(
    //   (p, i, arr) => arr.findIndex(t => t.idCategory === p.idCategory) === i
    // ).map(m => {
    //   return {id: m.idCategory, name: m.categoryName}
    // });
  }

}
