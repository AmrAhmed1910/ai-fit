export const mockStores = [
  {
    id: '1',
    name: 'Modern Threads',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    category: 'Fashion',
    country: 'USA',
    rating: 4.8,
    about: 'Premium fashion store offering contemporary styles for the modern individual.',
    banner: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200',
  },
  {
    id: '2',
    name: 'Urban Style Co',
    logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    category: 'Streetwear',
    country: 'UK',
    rating: 4.6,
    about: 'Street fashion and urban style essentials.',
    banner: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200',
  },
  {
    id: '3',
    name: 'Elegant Wardrobe',
    logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
    category: 'Formal',
    country: 'France',
    rating: 4.9,
    about: 'Sophisticated formal wear for special occasions.',
    banner: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200',
  },
  {
    id: '4',
    name: 'Sport Fit',
    logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400',
    category: 'Athletic',
    country: 'Germany',
    rating: 4.7,
    about: 'High-performance athletic wear and sportswear.',
    banner: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200',
  },
];

export const mockProducts = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    storeId: '1',
    storeName: 'Modern Threads',
    price: 29.99,
    currency: 'USD',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    category: 'T-Shirts',
    brand: 'Modern Threads',
    color: 'White',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium cotton t-shirt with a classic fit. Perfect for everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600',
    ],
    inStock: true,
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    storeId: '1',
    storeName: 'Modern Threads',
    price: 79.99,
    currency: 'USD',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600',
    category: 'Jeans',
    brand: 'Modern Threads',
    color: 'Blue',
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Contemporary slim fit jeans in premium denim.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600',
    ],
    inStock: true,
  },
  {
    id: '3',
    name: 'Leather Jacket',
    storeId: '2',
    storeName: 'Urban Style Co',
    price: 199.99,
    currency: 'USD',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
    category: 'Jackets',
    brand: 'Urban Style Co',
    color: 'Black',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Classic leather jacket with modern styling.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
    ],
    inStock: true,
  },
  {
    id: '4',
    name: 'Formal Suit',
    storeId: '3',
    storeName: 'Elegant Wardrobe',
    price: 399.99,
    currency: 'USD',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600',
    category: 'Suits',
    brand: 'Elegant Wardrobe',
    color: 'Navy',
    sizes: ['36R', '38R', '40R', '42R', '44R'],
    description: 'Elegant two-piece suit perfect for formal occasions.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600',
    ],
    inStock: true,
  },
  {
    id: '5',
    name: 'Running Shoes',
    storeId: '4',
    storeName: 'Sport Fit',
    price: 129.99,
    currency: 'USD',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    category: 'Shoes',
    brand: 'Sport Fit',
    color: 'Red',
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'High-performance running shoes with advanced cushioning.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    ],
    inStock: true,
  },
  {
    id: '6',
    name: 'Cotton Dress Shirt',
    storeId: '3',
    storeName: 'Elegant Wardrobe',
    price: 69.99,
    currency: 'USD',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600',
    category: 'Shirts',
    brand: 'Elegant Wardrobe',
    color: 'White',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium cotton dress shirt for formal and business occasions.',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600',
    ],
    inStock: true,
  },
];

export const mockOrders = [
  {
    id: 'ORD-001',
    date: '2025-11-05',
    status: 'Completed',
    total: 109.98,
    items: 2,
    products: [
      { name: 'Classic White T-Shirt', quantity: 1, price: 29.99 },
      { name: 'Slim Fit Jeans', quantity: 1, price: 79.99 },
    ],
  },
  {
    id: 'ORD-002',
    date: '2025-11-03',
    status: 'Pending',
    total: 199.99,
    items: 1,
    products: [
      { name: 'Leather Jacket', quantity: 1, price: 199.99 },
    ],
  },
  {
    id: 'ORD-003',
    date: '2025-10-28',
    status: 'Completed',
    total: 399.99,
    items: 1,
    products: [
      { name: 'Formal Suit', quantity: 1, price: 399.99 },
    ],
  },
];

export const mockSavedItems = [
  mockProducts[2],
  mockProducts[3],
  mockProducts[4],
];

export const mockStoreSalesData = [
  { month: 'Jun', sales: 12400, revenue: 24800 },
  { month: 'Jul', sales: 15600, revenue: 31200 },
  { month: 'Aug', sales: 18900, revenue: 37800 },
  { month: 'Sep', sales: 22300, revenue: 44600 },
  { month: 'Oct', sales: 26700, revenue: 53400 },
  { month: 'Nov', sales: 31200, revenue: 62400 },
];

export const mockCategoryRevenue = [
  { name: 'T-Shirts', value: 15400 },
  { name: 'Jeans', value: 23600 },
  { name: 'Jackets', value: 18900 },
  { name: 'Accessories', value: 8300 },
];

export const mockTrafficSources = [
  { name: 'Direct', value: 35 },
  { name: 'Social Media', value: 28 },
  { name: 'Ads', value: 22 },
  { name: 'Referral', value: 15 },
];

export const mockStoreProducts = [
  { id: '1', name: 'Classic White T-Shirt', unitsSold: 342, revenue: 10259.58, stock: 145 },
  { id: '2', name: 'Slim Fit Jeans', unitsSold: 287, revenue: 22949.13, stock: 89 },
  { id: '3', name: 'Leather Jacket', unitsSold: 156, revenue: 31198.44, stock: 23 },
  { id: '4', name: 'Cotton Hoodie', unitsSold: 412, revenue: 20188.00, stock: 8 },
];

export const mockRecentOrders = [
  { id: 'ORD-1234', customer: 'John Doe', amount: 129.99, time: '2 mins ago' },
  { id: 'ORD-1235', customer: 'Jane Smith', amount: 89.99, time: '5 mins ago' },
  { id: 'ORD-1236', customer: 'Mike Johnson', amount: 199.99, time: '12 mins ago' },
];
