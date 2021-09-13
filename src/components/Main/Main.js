import React, { useState, useEffect } from 'react';
import './Main.css';
import 'react-multi-carousel/lib/styles.css';
import ProductsCarousel from '../Carousel/Carousel';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
            });
    }, []);

	return (
		<div className="main">
			<div className="main-wrapper">
				<h1 className="main-title">Demo Ecommerce</h1>
				<p className="main-description">
					Demo project to see if the candidate is a good fit for the React/Redux position
				</p>
			</div>
			<div className="main-wrapper-product-container">
                <ProductsCarousel products={products} />
			</div>
		</div>
	);
};

export default Main;
