import * as React from 'react'
import Banner from './components/Banner'
import AppList from './components/AppList'

import { IAppItemProps } from './components/AppItem'

import $http from '../../service/http/Http'

interface IHomeProps {

}

/**
 * States for Home component.
 */
export interface IHomeState {
  /**
   * app in total
   */
  appList: IAppItemProps[];

  /**
   * 当前页数
   */
  currentPage: number;
}

class Home extends React.Component<IHomeProps, IHomeState> {
  public state: IHomeState = {
    appList: [],
    currentPage: 1,
  }

  public componentDidMount (): void {
    const url = '/api/v5/appso/discount/?platform=web&limit=10'
    $http.Get(url)
      .then((data: any) => {
        const appList = data.objects.map((item: any): IAppItemProps => {
          console.log()
          const downloadInfoForIOS = item.app.download_link.find((downloadItem: any) => downloadItem.platform === 'ios')

          return {
            id: item.id,
            name: item.app.name,
            content: item.content,
            tag: item.app.tag,
            downloadLink: downloadInfoForIOS.link,
            coverImg: item.app.cover_image.image,
            iconImg: item.app.icon.image,
            discountedPrice: item.discount_info[0].discounted_price,
            originalPrice: item.discount_info[0].original_price,
            publishedAt: String(item.published_at),
            updatedAt: String(item.updated_at),
          }
        })

        this.setState({ appList })
      })
  }

  public render(): JSX.Element {
    const { appList } = this.state
    return (
      <div className="Home">
        <Banner />
        <AppList appList={appList} />
      </div>
    );
  }
}

export default Home
