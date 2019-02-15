import React from "react"

const Logo = ({className, src, size}) => {
  size || (size = 40)
  return (
    <div className={className} style={{
      backgroundImage: `url(/logo/${src})`,
      height: size,
      width: size,
      minWidth: size,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }}/>
  )
}

export default Logo
