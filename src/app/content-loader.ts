import { isNull } from 'util'
import * as R from 'ramda'

let _contentIndex: null | ContentDataIndex = null
let _contentList: null | Array<ContentDataIndexItem> = null

export const loadContentByID = (id: string): ContentDataFile|null => {
  const content = loadContentIndex()
  const item =  R.propOr<null, ContentDataIndexItem>(null, id, content)
  if (isNull(item)) {
    return null
  }
  const contentRelPath = `${item.id}/${item.fileName}`
  return require(`../../build/static/posts/${contentRelPath}`)
}

export const loadContentIndex = (): ContentDataIndex => {
  if (isNull(_contentIndex)) {
    _contentIndex = require('../../build/static/posts/index.json')
    return _contentIndex
  }
  return _contentIndex
}

export const loadContentList = (): Array<ContentDataIndexItem> => {
  const content = loadContentIndex()
  if (isNull(_contentList)) {
    _contentList = R.pipe(
    R.values,
    R.sortBy(R.prop('id')),
  )(content)
  }
  return _contentList
}

export const getNextContent = (current: ContentDataIndexItem): ContentDataIndexItem => {
  const contentList = loadContentList()
  const currentIndex = R.indexOf(current, contentList)

  if (currentIndex > -1) {
    return contentList[currentIndex]
  }
  return contentList[0]
}
