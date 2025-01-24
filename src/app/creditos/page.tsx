import { Cards } from '@/components/Cards'
import { Containers } from '@/components/Container'
import { Typography } from '@/components/Typography'
import { images, imagesCredits, libraryList } from '@/constants'
import { IPageInfos } from '@/types'

const pageInfos: IPageInfos = {
  title: 'Créditos & Agradecimentos',
  children: 'Creditos',
  href: '/creditos'
}

const Credits = () => {
  return (
    <Containers.PageContainer
      bannerSrc={images.creditos}
      bannerAlt={images.creditos}
      pageInfos={pageInfos}
    >
      <Containers.Wrapper>
        <Typography.Text className="md:text-center">
          Este site, desenvolvido pela{' '}
          <Typography.Link
            href="/https://www.sev7tech.com"
            linkTitle="Descubra como a Sev7tech pode ajudar você"
            target="_blank"
          >
            Sev7tech.com
          </Typography.Link>{' '}
          , utiliza imagens e bibliotecas de código aberto que gostaríamos de
          agradecer e creditar abaixo.
        </Typography.Text>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <h2 className="creditsTitle">Images</h2>
        <ul className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {imagesCredits.map((items) => (
            <li key={items.id}>
              <Cards.ImageCredits {...items} />
            </li>
          ))}
        </ul>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <div className="gapCol24">
          <h2 className="creditsTitle">Bibliotecas & Framework</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {libraryList.map((item) => (
              <li key={item.id} className="relative py-3">
                <Typography.Link
                  href={item.href}
                  linkTitle={item.title}
                  className="absolute w-full"
                  target="_blank"
                >
                  {item.children}
                </Typography.Link>
              </li>
            ))}
          </ul>
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}

export default Credits
