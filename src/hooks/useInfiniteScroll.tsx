import { MutableRefObject, useMemo, useRef, useState } from 'react'
import { PostListItemType } from 'types/PostItem.types'
import { useEffect } from 'react'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const MAX_ITEM_PER_PAGE = 10

const useInfiniteScroll = (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType => {
  const [count, setCount] = useState<number>(1)

  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const postListByCategory = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => ++value)
      observer.disconnect()
    },
  )

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      MAX_ITEM_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * MAX_ITEM_PER_PAGE),
  }
}

export default useInfiniteScroll
