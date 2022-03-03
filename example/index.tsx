import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,ProductImage,ProductTitle,ProductButtons } from '../.';

const product = {
  id: '123',
  title: 'Coffee Mug',
  //img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard 
          product={product} 
          initialValues={{
          count: 5,
          maxCount: 10
          }}
      >
          {
          ({
              count,
              product,
              maxCount,
              isMaxCountReached,
              increaseBy,
              reset
          }) => (
              <>
              <ProductImage />
              <ProductTitle title='Custom title' />
              <ProductButtons />
              </>
          )
          }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
