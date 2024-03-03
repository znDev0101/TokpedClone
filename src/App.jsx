import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Root from "./routes/Root"
import Products from "./pages/Products"
import { Login } from "./pages/Login"
import CartDetail from "./pages/CartDetail"
import WishList from "./pages/WishList"
import UlasanPembeli from "./pages/UlasanPembeli"
import DetailProduct from "./components/detailproduct/DetailProduct"
import SpesifikasiDetailProduct from "./components/spesifikasidetailproduct/SpesifikasiDetailProduct"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart_detail",
          element: <CartDetail />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/products/category/mens_clothing",
          element: <Products />,
        },
        {
          path: "/products/category/womens_clothing",
          element: <Products />,
        },
        {
          path: "/products/category/jewelery",
          element: <Products />,
        },
        {
          path: "/products/category/electronics",
          element: <Products />,
        },
        {
          path: "/product_detail/:productId",
          element: <ProductDetails />,
          children: [
            {
              index: true,
              element: <DetailProduct />,
            },
            {
              path: "spesifikasi",
              element: <SpesifikasiDetailProduct />,
            },
          ],
        },
        {
          path: "/ulasan_pembeli",
          element: <UlasanPembeli />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
