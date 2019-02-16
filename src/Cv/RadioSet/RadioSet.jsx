import React from "react"

export const RadioSet = ({value, children, onChange, ...others}) => {
  return (
    <div {...others}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) {
          return null
        }
        return React.cloneElement(child, {
          key: i,
          isFirst: i === 0,
          selectedValue: value,
          onChange,
        })
      })}
    </div>
  )
}
