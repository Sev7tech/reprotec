import { Buttons } from '@/components/Buttons'
import { Cards } from '@/components/Cards'
import { Containers } from '@/components/Container'
import Picture from '@/components/Picture'
import { Typography } from '@/components/Typography'
import { images, OurDifferentialsList } from '@/constants'

export default function Home() {
  return (
    <Containers.PageContainer
      isPageInfos={false}
      bannerSrc="/images/home-banner.jpg"
      bannerAlt="Casal feliz em casa, com eletrodomésticos funcionando bem"
      bannerChildren={
        <section className="flex w-screen flex-col gap-8 text-left md:gap-10 md:text-center lg:max-w-[68%]">
          <h1 className="mainTitle">
            Cuidamos dos Seus Eletrodomésticos, Para um Lar Sem Preocupações
          </h1>
          <Typography.Text className="text-white">
            Na Reprotec, somos especializados em reparos de eletrodomésticos,
            oferecendo qualidade e eficiência. Somos autorizados das marcas
            Medea, Carrier, Springer, Comfee e TOSHIBA, garantindo peças
            originais e profissionais especializados para cuidar do seu lar.
          </Typography.Text>
          <div className="max-md:text-center">
            <Buttons.CTA />
          </div>
        </section>
      }
    >
      <Containers.Wrapper>
        <div>
          <Typography.BlueTitle>Nossos Serviços</Typography.BlueTitle>
          <h3 className="secondaryTitle">Explore Nossos Serviços</h3>
        </div>
        <ul className="servicesList">
          <li>
            <Cards.ServicesCard
              cardTitle="Serviço de Reparos"
              text="Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos."
              src="/images/home-banner.jpg"
              alt="Imagem de serviço de reparo"
              href="/"
              title="link"
            >
              Link
            </Cards.ServicesCard>
          </li>
          <li>
            <Cards.ServicesCard
              cardTitle="Serviço de Reparos"
              text="Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos."
              src="/images/home-banner.jpg"
              alt="Imagem de serviço de reparo"
              href="/"
              title="link"
            >
              Link
            </Cards.ServicesCard>
          </li>
          <li>
            <Cards.ServicesCard
              cardTitle="Serviço de Reparos"
              text="Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos. Oferecemos reparos de qualidade para seus eletrodomésticos."
              src="/images/home-banner.jpg"
              alt="Imagem de serviço de reparo"
              href="/"
              title="link"
            >
              Link
            </Cards.ServicesCard>
          </li>
        </ul>
        <div className="flexCenter">
          <Buttons.CTA2 />
        </div>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <div className="flex flex-col gap-8 lg:flex-row">
          <Picture
            src={images.aboutSection}
            alt={images.aboutSectionAlt}
            $w={600}
            $h={400}
            className="rounded-lg"
          />
          <div className="gapCol16 w-full lg:w-[90%]">
            <Typography.BlueTitle>Sobre</Typography.BlueTitle>

            <Typography.Text>
              Na Reprotec, somos referência em serviços de reparo e manutenção
              de eletrodomésticos em Guarulhos e região. Oferecemos assistência
              especializada para uma ampla gama de produtos, incluindo
              refrigeradores, lavadoras, freezers, adegas e muito mais.
            </Typography.Text>

            <Typography.Text>
              Seja para residências ou estabelecimentos comerciais, a Reprotec é
              a escolha certa para soluções rápidas e de alta qualidade. Como
              assistência técnica autorizada das marcas Midea, Carrier,
              Springer, Comfee e Toshiba, realizamos todos os serviços com peças
              originais e profissionais altamente qualificados, assegurando um
              padrão de qualidade incomparável.
            </Typography.Text>

            <Typography.Text>
              Nosso compromisso vai além do reparo, buscamos constantemente a
              inovação e a satisfação total de nossos clientes. Para isso,
              investimos em parcerias com fornecedores de confiança, garantindo
              que você receba o melhor serviço da região. Na Reprotec, cada
              cliente é tratado com atenção e cuidado, porque sua satisfação é a
              nossa maior prioridade.
            </Typography.Text>

            <Typography.Text>
              Assim como uma família reunida, acreditamos que eletrodomésticos
              em pleno funcionamento são essenciais para momentos inesquecíveis
              no seu lar. Conte com a Reprotec para manter sua casa funcionando
              com qualidade e confiança.
            </Typography.Text>
          </div>
        </div>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <div>
          <Typography.BlueTitle>Porque nos escolher?</Typography.BlueTitle>
          <h3 className="secondaryTitle">Nossos Diferencial</h3>
        </div>
        <Typography.Text>
          Se você busca uma assistência técnica de confiança para seus
          eletrodomésticos em Guarulhos e região, a Reprotec é a escolha ideal.
          Como assistência técnica autorizada de marcas renomadas, como Midea,
          Carrier, Springer, Toshiba e outras, oferecemos reparos especializados
          com peças originais e profissionais altamente qualificados. Com foco
          em serviços rápidos e eficientes, garantimos que seus eletrodomésticos
          funcionem perfeitamente, trazendo de volta a praticidade e segurança
          para o seu dia a dia.
        </Typography.Text>{' '}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {OurDifferentialsList.map((items) => (
            <li
              key={items.id}
              className={
                items.id === 2
                  ? 'translate-x-0 lg:-translate-y-14'
                  : items.id === 1
                    ? 'md:col-span-2 lg:col-span-1'
                    : 'col-span-1'
              }
            >
              <Cards.OurDifferentials {...items} />
            </li>
          ))}
        </ul>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <div className="gapCol16">
          <Typography.BlueTitle>Entre em Contato Conosco</Typography.BlueTitle>
          <h3 className="secondaryTitle">
            Agende a visita com um dos nossos especialistas
          </h3>
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}
