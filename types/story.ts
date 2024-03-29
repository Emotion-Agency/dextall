import { Richtext } from 'storyblok-js-client'

export interface iMeta {
  title: string
  description?: string
  image?: {
    _uid: string
    filename: string
  }
}

export interface iLink {
  linktype: string
  url: string
  cached_url: string
}

interface iButton {
  link: iLink
  text_button: string
  action?: string
}

export interface iStory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
  slug: string
  created_at: string
  first_published_at: string
  published_at: number
  name: string
  _uid: string
  id: number
  meta?: iMeta[]
}

export interface iImage {
  image: {
    _uid: string
    filename: string
  }
}

interface iBlogVideo {
  _uid: string
  video_id: string
}

export interface iPostBlock {
  _uid: string
  text_formatting: Richtext
  button: iButton[]
  youtube_video: iBlogVideo[]
}
