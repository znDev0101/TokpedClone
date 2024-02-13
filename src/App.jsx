import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Root from './routes/Root';
import Products from './pages/Products';
import { Login } from './pages/Login';
import CartDetail from './components/cartDetail/CartDetail';
import WishList from './pages/WishList';
import UlasanPembeli from './pages/UlasanPembeli';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/cart_detail',
          element: <CartDetail />,
        },
        {
          path: '/wishlist',
          element: <WishList />,
        },
        {
          path: '/products/category/mens_clothing',
          element: <Products />,
        },
        {
          path: '/products/category/womens_clothing',
          element: <Products />,
        },
        {
          path: '/products/category/jewelery',
          element: <Products />,
        },
        {
          path: '/products/category/electronics',
          element: <Products />,
        },
        {
          path: '/product_detail/:productId',
          element: <ProductDetail />,
        },
        {
          path: '/ulasan_pembeli',
          element: <UlasanPembeli />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
