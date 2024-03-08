import React, { forwardRef } from "react"

const Button = forwardRef(
  ({ styleButton, textButton, handleClick, disableBtn }, btnHapusRef) => {
    return (
      <button
        className={`${styleButton}`}
        onClick={handleClick}
        disabled={disableBtn}
        ref={btnHapusRef}>
        {textButton}
      </button>
    )
  }
)

export default Button
