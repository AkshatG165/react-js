import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a 1st product - amazing!"
        />
        <ProductItem
          title="Test2"
          price={9}
          description="This is a 2nd product - amazing!"
        />
        <ProductItem
          title="Test3"
          price={3}
          description="This is a 3rd product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
