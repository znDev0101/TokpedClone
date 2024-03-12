import React, { forwardRef } from "react"

const Button = forwardRef(
  ({ styleButton, textButton, handleClick, disableBtn }, modalRef) => {
    return (
      <button
        className={`${styleButton}`}
        onClick={handleClick}
        disabled={disableBtn}
        ref={modalRef}>
        {textButton}
      </button>
    )
  }
)

export default Button
