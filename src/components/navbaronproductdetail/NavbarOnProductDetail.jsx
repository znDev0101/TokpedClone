import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-regular-svg-icons"
import Button from "../button/Button"

const NavbarOnProductDetail = ({
  style,
  handleClick,
  navOnProductDetailRef,
}) => {
  return (
    <div className={style} ref={navOnProductDetailRef}>
      <FontAwesomeIcon icon={faMessage} size="2xl" />

      <Button
        textButton={"Beli"}
        styleButton={
          "w-full font-bold text-green-500 border-solid border-2 py-[.35rem] rounded-md border-green-500"
        }
      />

      <Button
        textButton={"+Keranjang"}
        styleButton={"w-full font-bold text-white py-2 bg-green-500 rounded-md"}
        handleClick={handleClick}
      />
    </div>
  )
}

export default NavbarOnProductDetail
