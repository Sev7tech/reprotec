import { ReactNode } from 'react'

import PageInfos, { IPageInfos } from '../PageInfos'
import Banner from '../Banner'

interface IPageContainer {
  isPageInfos: boolean
  bannerChildren: ReactNode
  bannerSrc: string
  bannerAlt: string
  children: ReactNode
  pageInfos?: IPageInfos
}

const PageContainer = ({
  isPageInfos = true,
  pageInfos,
  bannerChildren,
  children,
  bannerSrc,
  bannerAlt
}: IPageContainer) => {
  const childrenBanner = isPageInfos ? (
    <PageInfos {...pageInfos!} />
  ) : (
    <>{bannerChildren}</>
  )

  return (
    <main className="flexCenter mx-auto flex-col gap-32 pb-32 pt-16 md:pt-[72px]">
      <Banner src={bannerSrc} alt={bannerAlt}>
        {childrenBanner}
      </Banner>
      {children}
    </main>
  )
}

export default PageContainer
