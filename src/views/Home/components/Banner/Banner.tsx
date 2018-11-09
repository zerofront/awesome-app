import * as React from 'react'
import './Banner.css'

import BannerIcon from '../../../../asserts/banner.png'
import BackgroundIcon1 from '../../../../asserts/icon1.png'
import BackgroundIcon2 from '../../../../asserts/icon2.png'
import BackgroundIcon3 from '../../../../asserts/icon3.png'
import BackgroundIcon4 from '../../../../asserts/icon4.png'

interface IBannerProps {

}

class Banner extends React.Component {
  public render (): React.ReactElement<IBannerProps> {
    return (
      <div className="banner__wrapper">
        <div className="banner__background">
          <img className="banner__icon1" src={BackgroundIcon1} alt="" />
          <img className="banner__icon2" src={BackgroundIcon2} alt="" />
          <img className="banner__icon3" src={BackgroundIcon3} alt="" />
          <img className="banner__icon4" src={BackgroundIcon4} alt="" />
        </div>
        <img className="banner__img" src={BannerIcon} alt=""/>
        <div className="banner__slogan">超级应用 by Damon</div>
        <div className="banner__tip">－每日精品限免 / 促销应用－</div>
      </div>
    )
  }
}

export default Banner
