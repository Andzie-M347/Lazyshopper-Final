import data from '../../backend/data.js';


const HomePage = {
    render: () => {

        const {
            products
        } = data;

        return `
        <section class="weekly-products">
        <div class="row">
            ${products.map ( 
               (product) => `
                 <div class="col-md-3">
                 <div class="product">
                        <figure class="product__figure">
                            <a href="/#/product/${product._id}">
                                <img src="${product.image}" alt="${product.name}" class="img-fluid">
                            </a>

                            <div class="product__caption">
                                <a href="javascript:;" class="product__caption--wishlist">
                                    <svg>
                                        <use href="assets/fonts/symbol-defs.svg#icon-heart"></use>
                                    </svg>
                                </a>

                                <a href="javascript:;" class="product__caption--quick-view">
                                    quick view
                                </a>
                            </div>
                        </figure>


                        <div class="product__title">
                            <small class="product__title--cat">decorative lights</small>
                            <p class="product__title--name"> ${product.name}</p>
                            <strong class="product__title--price">R${product.price}</strong>
                        </div>

                        </figure>

                        </div><!-- ./product -->

                    </div> 
                    
            
            `).join('\n')}
       </div>
       </section>
       `
    }
}

export default HomePage;