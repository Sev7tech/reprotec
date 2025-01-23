import Link from 'next/link'

import { Buttons } from '@/components/Buttons'
import { Cards } from '@/components/Cards'
import { Containers } from '@/components/Container'
import ContactFrom from '@/components/Form/ContactForm'
import Picture from '@/components/Picture'
import { Typography } from '@/components/Typography'
import { images, OurDifferentialsList, servicesCardList } from '@/constants'

const servicesList = servicesCardList.filter((_, index) => index <= 5)

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
        <div className="gapCol24">
          <div className="lg:px-56">
            <Picture
              src={images.businessPartners}
              alt={images.businessPartnersAlt}
              $w={75}
              $h={6}
            />
          </div>
          <Typography.Text>
            Somos autorizados das marcas Medea, Carrier, Springer, Comfee e
            TOSHIBA. Com a confiança dessas grandes marcas, garantimos que
            nossos serviços de manutenção e reparo sejam realizados com peças
            originais e profissionais capacitados garantindo a mais alta
            qualidade. Conte com a experiência e a credibilidade de marcas
            líderes para garantir o funcionamento perfeito dos seus
            equipamentos.
          </Typography.Text>
        </div>
        <ul className="servicesList">
          {servicesList.map((items) => (
            <li key={items.id}>
              <Cards.ServicesCard {...items} />
            </li>
          ))}
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
        <div className="gapCol16">
          <div>
            <Typography.BlueTitle>Porque nos escolher?</Typography.BlueTitle>
            <h3 className="secondaryTitle">Nossos Diferencial</h3>
          </div>
          <Typography.Text>
            Se você busca uma assistência técnica de confiança para seus
            eletrodomésticos em Guarulhos e região, a Reprotec é a escolha
            ideal. Como assistência técnica autorizada de marcas renomadas, como
            Midea, Carrier, Springer, Toshiba e outras, oferecemos reparos
            especializados com peças originais e profissionais altamente
            qualificados. Com foco em serviços rápidos e eficientes, garantimos
            que seus eletrodomésticos funcionem perfeitamente, trazendo de volta
            a praticidade e segurança para o seu dia a dia.
          </Typography.Text>{' '}
        </div>

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
        <div className="gapCol8 lg:flex-row lg:gap-14">
          <div className="gapCol16 mb-14 lg:mb-0 lg:gap-8">
            <div>
              <Typography.BlueTitle>
                Entre em Contato Conosco
              </Typography.BlueTitle>
              <h3 className="secondaryTitle">
                Agende a visita com um dos nossos especialistas
              </h3>
            </div>

            <div className="flex gap-4">
              <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
                <Picture
                  src={images.callCenter}
                  alt={images.callCenterAlt}
                  $w={56}
                  $h={56}
                />
              </div>

              <div className="flex flex-col">
                <h4 className="smallTitle">Tem uma pergunta?</h4>
                <Link
                  href={'contact'}
                  title="Entre em contato com o atendimento Reprotec"
                  target="_blank"
                  className="text-base font-medium"
                >
                  +55 11 2483-2924
                </Link>
              </div>
            </div>

            <div>
              <h4 className="smallTitle">Horario de atendimento</h4>
              <p className="font-medium">Segunda a Sexta: 08:00h - 18:00h</p>
            </div>

            <div>
              <h4 className="smallTitle">
                Reprotec-Assistência Técnica Autorizada
              </h4>
              <Link
                href={'mapa'}
                title="Veja no mapa"
                className="text-base font-medium"
                target="_blank"
              >
                Avenida Venturosa, 111 - Jd. Cumbica - Guarulhos - cep:
                07240-000
              </Link>
            </div>
          </div>

          <div className="w-full md:mx-auto md:w-[90%] lg:w-[70%]">
            <ContactFrom />
          </div>
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}
