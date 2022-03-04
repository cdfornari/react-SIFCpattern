# State Initializer + Function Child
State initializer + Function Child pattern implementation.
## Example
```
import {ProductCard,ProductImage,ProductTitle,ProductButtons} from 'fornari-react-SIFCpattern'
```
```
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
        }) => {
            /* 
            -> here you can write some magic <-
            */
            return (
            <>
                <ProductImage />
                <ProductTitle title='Custom title' />
                <ProductButtons />
            </>
            )
        }
    }
</ProductCard>
```
### Carlos Fornari