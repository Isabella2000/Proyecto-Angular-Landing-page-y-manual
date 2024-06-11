export const productsList: Product[] = [
  { id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 litro' },
  { id: 2, name: 'Detergente', price: 20, description: 'Dura 120 lavados' },
  {
    id: 3,
    name: 'Limpia vidrios',
    price: 30,
    description: 'Tus vidrios transparentes',
  },
  {
    id: 4,
    name: 'Quita grasa',
    price: 4,
  },
  {
    id: 5,
    name: 'Perfumina',
    price: 50,
    description: 'El olor a campo mas realista',
  },
];

export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string;
}
