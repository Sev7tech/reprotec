import { Metadata } from 'next'

import { Containers } from '@/components/Container'
import { Typography } from '@/components/Typography'
import { CONFIG } from '@/config'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Entenda como protegemos os seus dados pessoais e como utilizamos cookies em nosso site. A Reprotec valoriza a sua privacidade.',
  keywords:
    'política de privacidade, proteção de dados, cookies, LGPD, Reprotec, Guarulhos, São Paulo',
  openGraph: {
    title: 'Política de Privacidade',
    description:
      'Saiba como a Reprotec protege a privacidade de seus usuários e os dados coletados em nosso site.',
    url: 'https://reprotec.com.br/politica-privacidade'
  },
  twitter: {
    title: 'Política de Privacidade',
    description:
      'Entenda a política de privacidade da Reprotec e como seus dados são protegidos.'
  }
}

const PoliticaPrivacidade = () => {
  return (
    <main className="py-32">
      <Containers.Wrapper>
        <div className="mx-auto flex flex-col gap-14 lg:max-w-[80%]">
          <div className="gapCol16">
            <h1 className="text-3xl font-bold text-black md:text-4xl">
              Política de Privacidade
            </h1>

            <Typography.Text>
              <strong>Última atualização: 27/01/2025</strong>
              <br />A Reprotec valoriza a privacidade de seus usuários e está
              comprometida em proteger suas informações pessoais. Esta Política
              de Privacidade descreve como coletamos, utilizamos e protegemos os
              dados dos visitantes do nosso site, em conformidade com a Lei
              Geral de Proteção de Dados (LGPD).
            </Typography.Text>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">1. Quem somos</h2>

            <Typography.Text>
              A Reprotec é uma empresa especializada em serviços de reparo de
              eletrodomésticos, atuando exclusivamente no Brasil. Nosso objetivo
              é facilitar a comunicação com nossos clientes, oferecendo
              informações e agendamento diretamente por meio do nosso site.
            </Typography.Text>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">2. Dados que coletamos</h2>

            <Typography.Text>
              Coletamos os seguintes dados dos usuários:
            </Typography.Text>

            <ul className="list-privacy-policy">
              <li>
                <Typography.Text>
                  Dados pessoais fornecidos voluntariamente: Nome, sobrenome,
                  e-mail e telefone (coletados via formulário de contato ou
                  agendamento).
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Dados de navegação: Informações sobre o navegador e
                  preferências do usuário, como configurações de tema.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Dados enviados via currículo: Nome completo, e-mail, telefone,
                  formação acadêmica, experiência profissional e quaisquer
                  informações contidas no CV.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Cookies e tecnologias similares: Dados de cookies essenciais e
                  informações fornecidas pelo Google Analytics para análise de
                  tráfego no site.
                </Typography.Text>
              </li>
            </ul>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">
              3. Finalidade da coleta de dados
            </h2>

            <Typography.Text>
              Os dados coletados são utilizados para:
            </Typography.Text>

            <ul className="list-privacy-policy">
              <li>
                <Typography.Text>
                  Melhorar a experiência do usuário no site, adaptando-o às suas
                  preferências.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Entrar em contato com os clientes para fornecer informações,
                  responder dúvidas e confirmar agendamentos.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Realizar análises estatísticas sobre o uso do site para
                  identificar oportunidades de melhoria.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Currículos: Dados contidos nos currículos são usados
                  exclusivamente para fins de avaliação e participação em
                  processos seletivos para vagas abertas na empresa.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Os currículos serão armazenados por até 1 ano após o envio,
                  sendo posteriormente excluídos ou anonimizados, salvo
                  obrigação legal para retenção.
                </Typography.Text>
              </li>
            </ul>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">
              4. Compartilhamento de dados
            </h2>

            <Typography.Text>
              A Reprotec não compartilha os dados pessoais coletados com
              terceiros, exceto para fins de análise de tráfego com o Google
              Analytics, onde as informações são processadas de forma anônima.
            </Typography.Text>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">5. Uso de cookies</h2>

            <Typography.Text>
              Utilizamos cookies essenciais para o funcionamento do site e
              coleta de informações de navegação. Além disso, o site usa cookies
              do Google Analytics para fins estatísticos.
            </Typography.Text>

            <ul className="list-privacy-policy">
              <li>
                <Typography.Text>
                  Consentimento: Estamos implementando um sistema de
                  consentimento (pop-up) que permitirá ao usuário aceitar ou
                  recusar os cookies não essenciais.
                </Typography.Text>
              </li>
            </ul>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">6. Direitos do usuário</h2>

            <Typography.Text>
              Os usuários do nosso site têm os seguintes direitos:
            </Typography.Text>

            <ul className="list-privacy-policy">
              <li>
                <Typography.Text>
                  Solicitar a exclusão de seus dados pessoais.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Retirar o consentimento para o uso de cookies.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Corrigir informações incorretas.
                </Typography.Text>
              </li>
            </ul>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">7. Segurança dos dados</h2>

            <Typography.Text>
              Adotamos medidas técnicas de proteção, como criptografia, para
              garantir que os dados coletados sejam armazenados com segurança.
            </Typography.Text>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">8. Contato</h2>

            <Typography.Text>
              Se você tiver dúvidas ou desejar exercer seus direitos em relação
              aos seus dados pessoais, entre em contato conosco pelos seguintes
              meios:
            </Typography.Text>

            <ul className="list-privacy-policy">
              <li>
                <Typography.Text>
                  E-mail: {CONFIG.contact.email.children}
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  Telefone: {CONFIG.contact.phone.children}
                </Typography.Text>
              </li>
            </ul>
          </div>

          <div className="gapCol16">
            <h2 className="sub-title-privacy-policy">
              9. Atualizações da política
            </h2>

            <Typography.Text>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Recomendamos que os usuários revisem este documento regularmente
              para se manterem informados sobre como protegemos suas
              informações.
            </Typography.Text>
          </div>
        </div>
      </Containers.Wrapper>
    </main>
  )
}

export default PoliticaPrivacidade
