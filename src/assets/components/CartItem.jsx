import { SCartItem } from '../css/styled';
import images from '../images/index_images';

const CartItem = () => {
	return (
		<SCartItem className='cart-item'>
			<img
				src={images.cart_item}
				alt='Cart item'
			/>
			<div className='cart-info'>
				<div className='cart-info-left'>
					<span className='product'>Product</span>
					<span className='brand'>Brand</span>
					<span className='size'>Size 38</span>
					<span className='price'>100 LEI</span>
				</div>
				<div className='cart-info-right'>
					<div className='img-con'>
						<img
							src={images.close_no_bg}
							alt='Cancel cart item'
						/>
					</div>
					<span className='time-remaining'>30:00 min.</span>
				</div>
			</div>
		</SCartItem>
	);
};

export default CartItem;
