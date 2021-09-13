import React from 'react';
import Carousel from 'react-multi-carousel';
import { useDispatch } from 'react-redux';
import { useModalState } from '../../hooks/useModalState';
import { addToCart } from '../../store/actions/cart/cart_action';
import { formatPrice } from '../../utils/helper_function';
import './Carousel.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1280, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    },
};

const ProductsCarousel = ({ products }) => {
    const { toggleCart } = useModalState();
    const dispatch = useDispatch();

     const handleClickAddToCard = (product) => {
        dispatch(addToCart(product));
        toggleCart();
    }

    return (
			<Carousel
				swipeable={true}
				draggable={true}
				responsive={responsive}
				ssr={true}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={750}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				itemClass="carousel-item-padding-40-px"
			>
				{products.length > 0 &&
					products.map((product, index) => (
						<div className="product-wrapper" key={index}>
							<img
								className="product-image"
								src={product.image}
								alt={product.title}
							/>
							<h3 className="product-title">{product.title}</h3>
							<p className="product-description">
								This is a short product description. You can find more details <abbr title={product.description}>here</abbr>.
								{/* { product.description } */}
							</p>
							<p className="product-price">{formatPrice(product.price)}</p>
							<button
								className="product-add-to-cart"
								onClick={() => handleClickAddToCard(product)}
							>
								Add to cart
							</button>
						</div>
					))}
			</Carousel>
		);
}

export default ProductsCarousel;
