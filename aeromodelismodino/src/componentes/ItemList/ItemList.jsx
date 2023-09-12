import { Item } from "../Item/Item.JSX";


export const ItemList = ({ products }) => {
    return (
      <>
        {products.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </>
    );
  }
  