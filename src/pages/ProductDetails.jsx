import React, { useEffect, useState, useContext, useRef } from "react"
import { useLocation, useParams } from "react-router"
import NavbarOnProductDetail from "../components/navbaronproductdetail/NavbarOnProductDetail"
import OthersProducts from "../components/othersproducts/OthersProducts"
import UlasanPembeli from "../components/ulasanpembeli/UlasanPembeli"
import { dataUlasan } from "../data/dataUlasan"
import { useFetch } from "../hooks/useFetch"
import { toast, Bounce } from "react-toastify"
import { products } from "../data/data"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cartSlice/cartSlice"
import {
  addProductToWishList,
  addWishListHeartBoolean,
  setBooleanWishList,
  removeProductFromWishList,
} from "../redux/wishlistSlice/wishListSlice"
import ScrollToTop from "../components/scrolltotop/ScrollToTop"
import ImageProductDetail from "../components/imagesproductsdetail/ImageProductDetail"
import InfoProduct from "../components/infoproduct/InfoProduct"
import CardBuyProduct from "../components/cardbuyproduct/CardBuyProduct"
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs"
import VarianProduct from "../components/varianproduct/VarianProduct"

const ProductDetails = () => {
  const { productId: id } = useParams()
  const [dataLimit, setDataLimit] = useState([])
  const [isOpenVarianProduct, setIsOpenVarianProduct] = useState(false)
  const [filterVarianProduct, setfilterVarianProduct] = useState([])
  const [indexActiveSelecWarnaProduct, setIndexActiveSelectWarnaProduct] =
    useState(0)
  const [indexActiveSelectUkuranProduct, setIndexActiveSelectUkuranProduct] =
    useState(0)
  const [selectWarnaVarianProduct, setSelectWarnaVarianProduct] = useState([])
  const [selectUkuranVarianProduct, setSelectUkuranVarianProduct] = useState([])
  const { cartProduct } = useSelector((state) => state.cart)
  const { wishListHeartBoolean } = useSelector((state) => state.wishList)
  const [isAnimation, setIsAnimation] = useState(false)

  const navOnProductDetailRef = useRef(null)

  const [indexHeartBoolean, setIndexHeartBoolean] = useState([])

  const dispatch = useDispatch()

  const { data: dataDetail, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  )

  const {
    title,
    description,
    image,
    price: priceProduct,
    rating,
    category,
  } = dataDetail

  useEffect(() => {
    const limit = dataUlasan.slice(0, 2)
    setDataLimit(limit)
    const filterResult = products.filter((data) => data.id == id)
    setfilterVarianProduct(filterResult)
    dispatch(addWishListHeartBoolean({ id }))
  }, [id])

  useEffect(() => {
    const findIndexWishListBoolean = wishListHeartBoolean.findIndex(
      (data) => data.id === id
    )
    setIndexHeartBoolean(findIndexWishListBoolean)
  }, [wishListHeartBoolean, id])

  const handleAddToCart = () => {
    const conditionStock = cartProduct.filter((data) => data.id == id)
    if (conditionStock[0]?.stock === 0) {
      toast.warn("Maaf stock barang sudah habis", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      toast.success("Berhasil menambahkan ke keranjang", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      dispatch(
        addToCart({
          id,
          data: filterVarianProduct,
          description,
          title,
          price: priceProduct,
          selectWarnaVarianProduct,
          selectUkuranVarianProduct,
        })
      )
    }
  }

  const handleClickAddToWishList = () => {
    dispatch(setBooleanWishList({ id }))
    if (wishListHeartBoolean[indexHeartBoolean]?.boolean) {
      dispatch(removeProductFromWishList({ id }))
      toast.info("🗑️, Barang berhasil di hapus dari wishlist", {
        position: `bottom-center`,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      dispatch(
        addProductToWishList({
          id,
          category,
          title,
          description,
          image,
          priceProduct,
          rating,
        })
      )
      toast.success("❤️, Barang berhasil menambahkan ke wishlist", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      setIsAnimation(true)
    }
  }

  useEffect(() => {
    if (filterVarianProduct[0]?.warna !== undefined)
      setSelectWarnaVarianProduct(filterVarianProduct[0]?.warna[0])
    if (filterVarianProduct[0]?.size !== undefined)
      setSelectUkuranVarianProduct(filterVarianProduct[0]?.size[0])
    return () => {
      setSelectWarnaVarianProduct([])
      setSelectUkuranVarianProduct([])
    }
  }, [filterVarianProduct])

  console.log(filterVarianProduct[0]?.warna)

  return (
    <div className="w-full pt-16  lg:pt-10 bg-white ">
      <BreadCrumbs title={title} category={category} />
      {/* Breadcrumbs only on dekstop */}
      <div className="grid px-4 lg:max-w-6xl lg:mx-auto lg:grid-cols-[2fr_1fr] lg:place-items-end lg:grid-rows-[repeat(2,max-content)] lg:items-start lg:gap-y-20">
        <div className="grid grid-rows-[repeat(2,max-content)] gap-y-8 lg:grid-cols-[1fr_2fr] lg:gap-x-10 lg:col-[1]  lg:row-[1]">
          <ImageProductDetail image={image} loading={loading} />
          <InfoProduct
            idProduct={id}
            title={title}
            price={priceProduct}
            rating={rating}
            description={description}
            category={category}
            indexActiveSelecWarnaProduct={indexActiveSelecWarnaProduct}
            setIndexActiveSelectWarnaProduct={setIndexActiveSelectWarnaProduct}
            indexActiveSelectUkuranProduct={indexActiveSelectUkuranProduct}
            setIndexActiveSelectUkuranProduct={
              setIndexActiveSelectUkuranProduct
            }
            selectWarnaVarianProduct={selectWarnaVarianProduct}
            setSelectWarnaVarianProduct={setSelectWarnaVarianProduct}
            selectUkuranVarianProduct={selectUkuranVarianProduct}
            setSelectUkuranVarianProduct={setSelectUkuranVarianProduct}
            wishListHeartBoolean={wishListHeartBoolean}
            indexHeartBoolean={indexHeartBoolean}
            filterVarianProduct={filterVarianProduct}
            handleClickAddToWishList={handleClickAddToWishList}
            isAnimation={isAnimation}
            setIsAnimation={setIsAnimation}
          />
        </div>
        <UlasanPembeli dataLimit={dataLimit} />
        {screen.width >= 1200 && (
          <CardBuyProduct
            handleClickAddToWishList={handleClickAddToWishList}
            wishListHeartBoolean={wishListHeartBoolean}
            indexHeartBoolean={indexHeartBoolean}
            quantity={filterVarianProduct[0]?.quantity}
            data={filterVarianProduct}
            filterVarianProduct={filterVarianProduct}
            id={id}
            image={image}
            title={title}
            stock={filterVarianProduct[0]?.stock}
            price={priceProduct}
            description={description}
            selectWarnaVarianProduct={selectWarnaVarianProduct}
            selectUkuranVarianProduct={selectUkuranVarianProduct}
            setIsAnimation={setIsAnimation}
            isAnimation={isAnimation}
          />
        )}
      </div>
      {/* TOKO LAINYA */}
      <OthersProducts idProduct={id} categoryProducts={category} />

      <ScrollToTop
        styleIfTrue={
          "fixed w-12 justify-center items-center flex h-12 bottom-20 lg:bottom-10 right-6 rounded-full shadow-lg bg-white  duration-300 translate-y-0 "
        }
        styleIffalse={
          "fixed w-12 justify-center items-center flex h-12 bottom-0 right-6 rounded-full shadow-lg bg-white  duration-300 translate-y-full"
        }
        onClick={() => window.scrollTo(0, 0)}
        numberScrollYWindow={50}
      />

      {/* ONLY ON MOBILE */}
      <VarianProduct
        isOpenVarianProduct={isOpenVarianProduct}
        indexActiveSelecWarnaProduct={indexActiveSelecWarnaProduct}
        setIndexActiveSelectWarnaProduct={setIndexActiveSelectWarnaProduct}
        indexActiveSelectUkuranProduct={indexActiveSelectUkuranProduct}
        setIndexActiveSelectUkuranProduct={setIndexActiveSelectUkuranProduct}
        selectUkuranVarianProduct={selectUkuranVarianProduct}
        setSelectUkuranVarianProduct={setSelectUkuranVarianProduct}
        selectWarnaVarianProduct={selectWarnaVarianProduct}
        setSelectWarnaVarianProduct={setSelectWarnaVarianProduct}
        filterVarianProduct={filterVarianProduct}
        productId={id}
        setIsOpenVarianProduct={setIsOpenVarianProduct}
        navOnProductDetailRef={navOnProductDetailRef}
        imageProduct={image}
        price={priceProduct}
        handleClick={handleAddToCart}
        stock={filterVarianProduct[0]?.stock}
      />
      <NavbarOnProductDetail
        style={
          "w-full lg:hidden bg-white fixed bottom-0 py-2 flex gap-x-2 px-3"
        }
        handleClick={() => setIsOpenVarianProduct(!isOpenVarianProduct)}
        navOnProductDetailRef={navOnProductDetailRef}
      />
    </div>
  )
}

export default ProductDetails
