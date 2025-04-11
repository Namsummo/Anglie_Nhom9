// Lấy thông tin sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Dữ liệu mẫu (sau này sẽ thay thế bằng API)
const products = [
    {
        id: 1,
        name: "Áo thun nam cổ tròn",
        price: 299000,
        originalPrice: 399000,
        description: "Áo thun nam chất liệu cotton 100%, thoáng mát, thấm hút mồ hôi tốt. Thiết kế đơn giản, dễ phối đồ.",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 10,
        rating: 4.5,
        reviews: [
            {
                author: "Nguyễn Văn A",
                date: "2024-03-15",
                rating: 5,
                content: "Sản phẩm chất lượng tốt, vải mềm mại, mặc rất thoải mái."
            },
            {
                author: "Trần Thị B",
                date: "2024-03-10",
                rating: 4,
                content: "Áo đẹp, giá hợp lý. Chỉ hơi nhỏ so với size thông thường."
            }
        ]
    },
    {
        id: 2,
        name: "Quần jean nam slim fit",
        price: 599000,
        originalPrice: 799000,
        description: "Quần jean nam thiết kế slim fit, chất liệu denim cao cấp, co giãn tốt. Phù hợp với nhiều phong cách thời trang.",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 15,
        rating: 4.8,
        reviews: [
            {
                author: "Lê Văn C",
                date: "2024-03-18",
                rating: 5,
                content: "Quần đẹp, form chuẩn, chất liệu tốt. Rất hài lòng với sản phẩm."
            }
        ]
    },
    {
        id: 3,
        name: "Áo khoác bomber nam",
        price: 899000,
        originalPrice: 1299000,
        description: "Áo khoác bomber nam thiết kế thời trang, chất liệu vải dù chống nước, có lớp lót ấm áp. Phù hợp với nhiều phong cách thời trang.",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 8,
        rating: 4.7,
        reviews: [
            {
                author: "Phạm Thị D",
                date: "2024-03-20",
                rating: 5,
                content: "Áo khoác đẹp, ấm áp, chất liệu tốt. Mặc rất hợp thời trang."
            }
        ]
    },
    {
        id: 4,
        name: "Váy liền thân nữ",
        price: 799000,
        originalPrice: 999000,
        description: "Váy liền thân nữ thiết kế thanh lịch, chất liệu vải cao cấp, form dáng đẹp.",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 12,
        rating: 4.9,
        reviews: [
            {
                author: "Hoàng Thị E",
                date: "2024-03-22",
                rating: 5,
                content: "Váy đẹp, chất liệu tốt, mặc rất sang trọng."
            }
        ]
    },
    {
        id: 5,
        name: "Đầm Hoa Nữ",
        price: 899000,
        originalPrice: 1099000,
        description: "Đầm hoa nữ thiết kế trẻ trung, chất liệu voan mềm mại.",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 15,
        rating: 4.7,
        reviews: [
            {
                author: "Lê Thị G",
                date: "2024-03-28",
                rating: 4,
                content: "Đầm hoa đẹp, chất liệu tốt, mặc rất thoải mái."
            }
        ]
    },
    {
        id: 6,
        name: "Áo Khoác Nữ",
        price: 999000,
        originalPrice: 1299000,
        description: "Áo khoác nữ thời trang, giữ ấm tốt.",
        images: [
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 10,
        rating: 4.6,
        reviews: [
            {
                author: "Trần Văn H",
                date: "2024-03-30",
                rating: 5,
                content: "Áo khoác đẹp, chất liệu tốt, mặc rất ấm áp."
            }
        ]
    },
    {
        id: 7,
        name: "Quần Jean Nữ",
        price: 699000,
        originalPrice: 899000,
        description: "Quần jean nữ form cao cấp, ôm dáng.",
        images: [
            "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 18,
        rating: 4.4,
        reviews: [
            {
                author: "Phạm Thị I",
                date: "2024-04-01",
                rating: 4,
                content: "Quần jean đẹp, chất liệu tốt, mặc rất thoải mái."
            }
        ]
    },
    {
        id: 9,
        name: "Áo Sơ Mi Nữ",
        price: 599000,
        originalPrice: 799000,
        description: "Áo sơ mi nữ công sở, form đẹp, chất liệu cao cấp.",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 25,
        rating: 4.8,
        reviews: [
            {
                author: "Nguyễn Văn J",
                date: "2024-04-03",
                rating: 5,
                content: "Áo sơ mi đẹp, chất liệu tốt, mặc rất thoải mái."
            }
        ]
    },
    {
        id: 10,
        name: "Quần Short Nam",
        price: 399000,
        originalPrice: 499000,
        description: "Quần short nam thể thao, thoáng mát, dễ vận động.",
        images: [
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ],
        stock: 30,
        rating: 4.5,
        reviews: [
            {
                author: "Lê Văn K",
                date: "2024-04-05",
                rating: 4,
                content: "Quần short đẹp, chất liệu tốt, mặc rất thoải mái."
            }
        ]
    }
];

// Hiển thị thông tin sản phẩm
function displayProductDetails() {
    const product = products.find(p => p.id === parseInt(productId));
    console.log(product); // Kiểm tra dữ liệu sản phẩm
    console.log(product.name); // Kiểm tra tên sản phẩm
    
    if (!product) {
        document.querySelector('.product-detail').innerHTML = '<h2>Sản phẩm không tồn tại</h2>';
        return;
    }

    // Hiển thị hình ảnh
    const mainImage = document.getElementById('mainImage');
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    
    mainImage.src = product.images[0];
    
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Hình ảnh ${index + 1}`;
        thumbnail.addEventListener('click', () => {
            mainImage.src = image;
        });
        thumbnailContainer.appendChild(thumbnail);
    });

    // Hiển thị thông tin sản phẩm
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = formatPrice(product.price);
    document.getElementById('originalPrice').textContent = formatPrice(product.originalPrice);
    document.getElementById('productDescription').textContent = product.description;
    
    // Hiển thị tình trạng hàng
    const stockStatus = document.getElementById('stockStatus');
    if (product.stock > 0) {
        stockStatus.textContent = `Còn hàng (${product.stock} sản phẩm)`;
        stockStatus.className = 'in-stock';
    } else {
        stockStatus.textContent = 'Hết hàng';
        stockStatus.className = 'out-of-stock';
    }

    // Hiển thị đánh giá
    displayReviews(product.reviews);
}

// Hiển thị đánh giá
function displayReviews(reviews) {
    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        
        reviewCard.innerHTML = `
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-date">${formatDate(review.date)}</span>
            </div>
            <div class="review-rating">
                ${generateStars(review.rating)}
            </div>
            <div class="review-content">
                ${review.content}
            </div>
        `;
        
        reviewsContainer.appendChild(reviewCard);
    });
}

// Tạo HTML cho sao đánh giá
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Định dạng giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Định dạng ngày tháng
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
}

// Xử lý sự kiện tăng/giảm số lượng
document.getElementById('increase').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById('decrease').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// Xử lý sự kiện thêm vào giỏ hàng
document.getElementById('addToCart').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        // Lưu vào localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: quantity
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Đã thêm sản phẩm vào giỏ hàng!');
    }
});

// Xử lý sự kiện mua ngay
document.getElementById('buyNow').addEventListener('click', function() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: quantity
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    window.location.href = 'cart.html';
});

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', displayProductDetails); 