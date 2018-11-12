import * as React from 'react'
import { IAppItem } from './index'

import './AppItem.css'

interface IAppItemProps {
  appInfo: IAppItem
}

const AppList: React.SFC<IAppItemProps> = (props: IAppItemProps) => {
  const { appInfo } = props

  return (
    <li className="AppItem__wrapper">
      <img className="AppItem__logo" src={appInfo.iconImg} alt="App 的 logo"/>
      <div className="AppItem__info">
        <div>
          <span className="AppItem__name">{appInfo.name}</span>
        </div>
        <div>
          <span className="AppItem__platform">IOS</span>
          <span className="dot" />
          <span className="AppItem__time">{appInfo.updatedAt}</span>
        </div>
      </div>
      <div className="AppItem__originalPrice">￥{appInfo.originalPrice}</div>
      <div className="AppItem__discountedPrice">{formatFree(appInfo.discountedPrice)}</div>
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
