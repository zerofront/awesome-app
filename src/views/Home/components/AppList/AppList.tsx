import * as React from 'react'
import QueueAnim from 'rc-queue-anim'
import AppItem, { IAppItemProps } from '../AppItem'

interface IAppListProps {
  appList: IAppItemProps[]
}

const AppList: React.SFC<IAppListProps> = (props: IAppListProps) => {
  const appItems = props.appList.map((item: IAppItemProps) => {
    return (
      <AppItem
        {...item}
        key={item.id}
      />
    )
  })

  return (
    <div className="AppList__wrapper">
      {/* 列表动画 */}
      <QueueAnim
        component="ul"
        animConfig={[
          { opacity: [1, 0], translateY: [0, 30] },
          { height: 0 },
        ]}
        ease={['easeOutQuart', 'easeInOutQuart']}
        duration={[550, 450]}
        interval={150}
      >
        {appItems}
      </QueueAnim>
    </div>
  )
}

export default AppList
