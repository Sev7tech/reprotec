import Link from 'next/link'

import { Containers } from '@/components/Container'
import Picture from '@/components/Picture'
import { Typography } from '@/components/Typography'
import { images } from '@/constants'

const NotFound = () => {
  return (
    <main className="py-32">
      <Containers.Wrapper>
        <div className="gapCol24 mx-auto max-w-[800px]">
          <h1 className="text-2xl font-bold text-black md:text-4xl">
            Opa! Parece que essa página precisa de um manutenção. 😅
          </h1>
          <div className="max-w-[600px]">
            <Picture
              src={images.notFound}
              alt={images.notFoundAlt}
              $w={600}
              $h={500}
            />
          </div>
          <Typography.Text>
            Não se preocupe, estamos aqui para consertar isso. Que tal voltar ao
            início e descobrir as soluções que temos para você?
          </Typography.Text>
          <div className="text-center">
            <Link
              href="/"
              title="Voltar para a página home"
              aria-label="Voltar para página home"
              className="buttonBase bg-sky-200 text-xl font-semibold text-zinc-800"
            >
              Voltar
            </Link>
          </div>
        </div>
      </Containers.Wrapper>
    </main>
  )
}

export default NotFound
