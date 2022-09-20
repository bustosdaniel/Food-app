import React from 'react'
import MdiIcon from '@mdi/react'

export default function Icon({ path, ...props }) {
  return (
    <MdiIcon
      path={path}
      title="Icon"
      size={1}
      style={{
        marginRight: props.mr,
        marginLeft: props.ml
      }}
      {...props}
    />
  )
}
