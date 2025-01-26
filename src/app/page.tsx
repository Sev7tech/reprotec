import { Buttons } from '@/components/Buttons'
import { Cards } from '@/components/Cards'
import { Containers } from '@/components/Container'
import ContactFrom from '@/components/Form/ContactForm'
import Picture from '@/components/Picture'
import { Typography } from '@/components/Typography'
import { images, OurDifferentialsList, servicesCardList } from '@/constants'
import ContactInformation from '@/components/ContactInformation'
import { getDelay } from '@/utils/animation.utils'

const servicesList = servicesCardList.filter((_, index) => index <= 5)

export default function Home() {
  return (
    <Containers.PageContainer
      isPageInfos={false}
      bannerSrc="/images/home-banner.jpg"
      bannerAlt="Casal feliz em casa, com eletrodomésticos funcionando bem"
      bannerChildren={
        <section
          className="flex w-screen flex-col gap-8 text-left md:gap-10 md:text-center lg:max-w-[68%]"
          data-aos="zoom-in-up"
        >
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
        <div className="gapCol24">
          <div data-aos="fade-up">
            <Typography.BlueTitle>Nossos Serviços</Typography.BlueTitle>
            <h3 className="secondaryTitle">Explore Nossos Serviços</h3>
          </div>

          <div className="gapCol24">
            <div className="lg:px-56" data-aos="fade-up">
              <Picture
                src={images.businessPartners}
                alt={images.businessPartnersAlt}
                $w={75}
                $h={6}
              />
            </div>
          </div>

          <Typography.Text data-aos="fade-up">
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
            <li
              key={items.id}
              data-aos={items.id! % 2 === 0 ? 'fade-up-left' : 'fade-up-right'}
              data-aos-delay={getDelay(items.id!)}
            >
              <Cards.ServicesCard {...items} />
            </li>
          ))}
        </ul>
        <div className="flexCenter">
          <Buttons.SeeAll />
        </div>
      </Containers.Wrapper>

      <Containers.Wrapper className="lg:flex-row">
        <Picture
          src={images.aboutSection}
          alt={images.aboutSectionAlt}
          $w={600}
          $h={400}
          className="rounded-lg"
          data-aos="fade-up-right"
        />

        <div className="gapCol16 w-full lg:w-[90%]">
          <Typography.BlueTitle data-aos="fade-up-left">
            Sobre
          </Typography.BlueTitle>

          <Typography.Text data-aos="fade-up-left">
            Na Reprotec, somos referência em serviços de reparo e manutenção de
            eletrodomésticos em Guarulhos e região. Oferecemos assistência
            especializada para uma ampla gama de produtos, incluindo
            refrigeradores, lavadoras, freezers, adegas e muito mais.
          </Typography.Text>

          <Typography.Text data-aos="fade-up-left">
            Seja para residências ou estabelecimentos comerciais, a Reprotec é a
            escolha certa para soluções rápidas e de alta qualidade. Como
            assistência técnica autorizada das marcas Midea, Carrier, Springer,
            Comfee e Toshiba, realizamos todos os serviços com peças originais e
            profissionais altamente qualificados, assegurando um padrão de
            qualidade incomparável.
          </Typography.Text>

          <Typography.Text data-aos="fade-up-left">
            Nosso compromisso vai além do reparo, buscamos constantemente a
            inovação e a satisfação total de nossos clientes. Para isso,
            investimos em parcerias com fornecedores de confiança, garantindo
            que você receba o melhor serviço da região. Na Reprotec, cada
            cliente é tratado com atenção e cuidado, porque sua satisfação é a
            nossa maior prioridade.
          </Typography.Text>

          <Typography.Text data-aos="fade-up-left">
            Assim como uma família reunida, acreditamos que eletrodomésticos em
            pleno funcionamento são essenciais para momentos inesquecíveis no
            seu lar. Conte com a Reprotec para manter sua casa funcionando com
            qualidade e confiança.
          </Typography.Text>
        </div>
      </Containers.Wrapper>

      <Containers.Wrapper>
        <div className="gapCol16">
          <div>
            <Typography.BlueTitle data-aos="fade-up">
              Porque nos escolher?
            </Typography.BlueTitle>
            <h3 className="secondaryTitle" data-aos="fade-up">
              Nossos Diferencial
            </h3>
          </div>
          <Typography.Text data-aos="fade-up">
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

      <Containers.Wrapper className="lg:flex-row">
        <div
          className="gapCol16 lg:mb-0 lg:gap-8"
          data-aos="fade-up-right"
          data-aos-delay={getDelay(2)}
        >
          <div>
            <Typography.BlueTitle>
              Entre em Contato Conosco
            </Typography.BlueTitle>
            <h3 className="secondaryTitle">
              Agende a visita com um dos nossos especialistas
            </h3>
          </div>

          <ContactInformation />
        </div>

        <div
          className="w-full md:mx-auto md:w-[90%] lg:w-[70%]"
          data-aos="fade-up-left"
          data-aos-delay={getDelay(3)}
        >
          <ContactFrom />
        </div>
      </Containers.Wrapper>
    </Containers.PageContainer>
  )
}
