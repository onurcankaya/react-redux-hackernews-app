import React from 'react'

const Button = ({ children, className, onClick, type = 'button' }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

const ButtonInline = ({ className, children, onClick }) => {
  return (
    <Button className="button-inline" onClick={onClick}>
      {children}
    </Button>
  )
}

export { Button, ButtonInline }
