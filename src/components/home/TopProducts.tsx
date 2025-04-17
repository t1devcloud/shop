 

import React from "react";   
import top_product from "../../data/top_product";
  
// const MyTimer = React.lazy(() => import('../common/Timer'));



const TopProducts = () => {
	return (
		<>
			<div className="top-products-area py-3">
				<div className="container">
					<div className="section-heading d-flex align-items-center justify-content-between dir-rtl">
						<h6>Top Products</h6>
						<a className="btn btn-sm btn-light" href="/shop-grid">
							View all<i className="ms-1 ti ti-arrow-right"></i>
						</a>
					</div>
					<div className="row g-2">
						{top_product.map((item, i) => (
							<div key={i} className="col-6 col-md-4">
								<div className="card product-card">
									<div className="card-body">
										<span
											className={`badge rounded-pill badge-${item.badge_color}`}
										>
											{item.badge_text}
										</span>
										<a className="wishlist-btn" href="#">
											<i className="ti ti-heart"></i>
										</a>
										<a
											className="product-thumbnail d-block"
											href="/single-product"
										>
											<img className="mb-2" src={item.img} alt="" />
											{/* {i === 0 || i === 3 ? (
												<ul className="offer-countdown-timer d-flex align-items-center shadow-sm">
													<MyTimer />
												</ul>
											) : null} */}
										</a>

										<a className="product-title" href="/single-product">
											{item.title}
										</a>

										<p className="sale-price">
											$ {item.new_price}
											<span>$ {item.old_price}</span>
										</p>

										<div className="product-rating">
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
											<i className="ti ti-star-filled"></i>
										</div>
										<a className="btn btn-primary btn-sm" href="#">
											<i className="ti ti-plus"></i>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default TopProducts;
