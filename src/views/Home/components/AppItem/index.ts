import AppItem from './AppItem'

export default AppItem

/**
 * 限免App的简要信息
*/
export interface IAppItem {
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
}
