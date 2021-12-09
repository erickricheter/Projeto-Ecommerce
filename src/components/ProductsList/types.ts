import { ProductData } from "../../pages/Home/FavoriteProducts/types";

export interface ProductsListProps {
  products?: ProductData[];
  title: string;
  type?: string;
}
