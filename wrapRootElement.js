import React from 'react'
import { BannerProvider } from "./src/context/UpdateBannerContext"


export const wrapRootElement = ({element}) => (
    <BannerProvider>
      {element}
    </BannerProvider>
  )