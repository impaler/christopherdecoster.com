declare type FileContent = {
  content: string
  filePath: string
}

declare type FileHtmlContent = {
  html: string
} & FileContent

declare type FileCollectedContent = {
  meta: ContentMetaData
} & FileHtmlContent

declare type FileData = {
  fileName: string
} & FileCollectedContent

declare interface ContentMetaData {
  title: string
  tagline?: string
  tags?: string[]
  [key: string]: string | number | Array<string|number>
}

declare type CollectOptions = {
  path: string // the string used for the url
  location: string // absolute realpath on the fs
  glob?: string
}

declare type ContentDataFile = {
  html: string
  meta: ContentMetaData
  fileName: string
}

declare type ContentDataIndexItem = {
  id: string
  title: string
  fileName: string
  tagline?: string
}

declare type ContentDataIndex = {
  [contentTitle: string]: ContentDataIndexItem
}

declare type GenerateOptions = {
  destination?: string
  contentRoute: string
} & CollectOptions
