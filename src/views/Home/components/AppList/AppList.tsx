import * as React from 'react'
import AppItem, { IAppItem } from '../AppItem'

interface IAppListProps {
  appList: IAppItem[]
}

const AppList: React.SFC<IAppListProps> = (props: IAppListProps) => {
  return (
    <div className="AppList__wrapper">
      {
        props.appList.map((item: IAppItem) => {
          return (
            <AppItem
              appInfo={item}
              key={item.id}
            />
          )
        })
      }
    </div>
  )
}

export default AppList
