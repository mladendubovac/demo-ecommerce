import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useModalState } from '../../hooks/useModalState';
import { addToCart } from '../../store/actions/cart/cart_action';
import { formatPrice } from '../../utils/helper_function';
import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "100px",
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerPadding: "0"
            }
        }
    ]
};

const ProductsCarousel = ({ products }) => {
    const { toggleCart } = useModalState();
    const dispatch = useDispatch();
    const ref = useRef(null);

     const handleClickAddToCard = (product) => {
        dispatch(addToCart(product));
        toggleCart();
    }

    const handleNavigation = (direction) => {
        const carousel = ref.current;
        direction === 'next' ? carousel.slickNext() : carousel.slickPrev();
    }

    return (
        products.length > 0 &&
            <>
                <Slider {...settings} ref={ref}>
                    {products.map((product, index) => (
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
                </Slider>
                <div className="product-navigation">
                    <FaArrowLeft className="product-navigation-arrow" onClick={() => handleNavigation('previous')} />
                    <FaArrowRight className="product-navigation-arrow" onClick={() => handleNavigation('next')} />
                </div>
            </>
    );
}

export default ProductsCarousel;
