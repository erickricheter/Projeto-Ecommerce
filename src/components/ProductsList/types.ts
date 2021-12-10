import { ProductData } from "../../pages/Home/FavoriteProducts/types";

export interface ProductsListProps {
  products?: ProductData[];
  title: string;
  type?: string;
  totalValue?: string;
  ticket?: string;
  setTicket?: (value: React.SetStateAction<string>) => void;
  isTicketValid?: boolean;
}
