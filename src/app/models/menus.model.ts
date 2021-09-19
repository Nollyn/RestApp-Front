import { MenuDishesModel } from "@app/models/menu-dishes.model";

export class MenusModel {
  constructor() {
    this.dishes = [];
  }

  id: number;
  name: string;
  description: string;
  date: Date;
  dayMenu: boolean;
  idMenuParent?: number;
  dishes: MenuDishesModel[];
}
