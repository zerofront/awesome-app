import * as React from 'react'

import './AppItem.css'

/**
* 限免App的简要信息
*/
export interface IAppItemProps {
 id: number,
 name: string,
 content: string,
 tag: string[],

 downloadLink: string,
 coverImg: string,
 iconImg: string,

 discountedPrice: string,
 originalPrice: string,
 publishedAt: string,
 updatedAt: string,

 platform?: string,
}

const AppList: React.SFC<IAppItemProps> = (props: IAppItemProps) => {
  const {
    iconImg,
    name,
    updatedAt,
    originalPrice,
    discountedPrice,
    platform = 'IOS',
  } = props

  return (
    <li className="AppItem__wrapper">
      <img className="AppItem__logo" src={iconImg} alt="App 的 logo"/>
      <div className="AppItem__info">
        <div>
          <span className="AppItem__name">{name}</span>
        </div>
        <div>
          <span className="AppItem__platform">{platform}</span>
          <span className="dot" />
          <span className="AppItem__time">{updatedAt}</span>
        </div>
      </div>
      <div className="AppItem__originalPrice">￥{originalPrice}</div>
      <div className="AppItem__discountedPrice">{formatFree(discountedPrice)}</div>
    </li>
  )
}

function formatFree (price: string): string {
  if (Number(price) === 0) {
    return 'Free'
  } else {
    return `￥${price}`
  }
}
export default AppList
