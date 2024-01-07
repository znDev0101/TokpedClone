import '../src/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { QueryClient, QueryClientProvider } from 'react-query';
import Root from './routes/Root';
import Products from './pages/Products';

function App() {
  const queryClient = new QueryClient();

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
          path: '/product_mens_clothing_detail/:productId',
          element: <ProductDetail />,
        },
        {
          path: '/product_womens_clothing_detail/:productId',
          element: <ProductDetail />,
        },
        {
          path: '/product_jewelery_detail/:productId',
          element: <ProductDetail />,
        },
        {
          path: '/product_electronics_detail/:productId',
          element: <ProductDetail />,
        },
        {
          path: '/product_detail/:productId',
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
