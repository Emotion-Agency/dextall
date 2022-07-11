interface iMeta {
  title: string
  description: string
}

export interface iStory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
  slug: string
  created_at: string
  first_published_at: string
  name: string
  _uid: string
  meta?: iMeta[]
}

export interface iImage {
  image: {
    _uid: string
    filename: string
  }
}
