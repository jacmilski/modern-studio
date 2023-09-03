import React from 'react';
import { graphql } from 'gatsby';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import HighLightedHeading from '../components/HighLightedHeading/HighLightedHeading';
import { Hero, InfoItemContent, InfoItem } from '../assets/styles/pages/Zespol.styles';
// @ts-ignore
import PhoneIcon from '../assets/icons-components/phone.svg';
// @ts-ignore
import MailIcon from '../assets/icons-components/mail.svg';

const zespol = ({ data }) => {
  return (
    <ContentWrapper isSubpage>
      <Hero image={data.hero0.publicURL}>
        <h1>Zespół</h1>
        <p>Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego warto z nami współpracować.</p>
      </Hero>
      <InfoItem>
        <InfoItemContent>
          <HighLightedHeading>Anna Żarczyńska</HighLightedHeading>
          <p>Pośrednik nieruchomości nr licencji 666</p>
          <p>
            Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu. Doświadczenie zawodowe zdobywała w poznańskich kancelariach prawnych. Swoją pracę opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych wnętrz, niebanalnej architektury i sztuki w każdej postaci.
          </p>
          <a href="mailto:ania@nieruchomosci.pl">
            <MailIcon />
            ania@msnieruchomosci.pl
          </a>
          <a href="phone:730026439">
            <PhoneIcon />
            730 026 439
          </a>

        </InfoItemContent>
        <img src={data.ania1.publicURL} alt="Anna" />
      </InfoItem>

      <InfoItem>
        <InfoItemContent>
          <HighLightedHeading>Amanda Grabowska</HighLightedHeading>
          <p>Agent DS nieruchomości</p>
          <p>
            Z wykształcenia Product & Brand Managerka. Branża nieruchomości od razu okazała się zawodowym strzałem w dziesiątkę - połączeniem pasji do pracy z ludźmi i pokarmu dla kreatywnej duszy. Zachwyca ją proces, który krok po kroku przechodzi wraz z klientem, a każde zlecenie to nowa, fascynująca przygoda, której centrum stanowi człowiek i jego marzenie.
          </p>
          <a href="mailto:amanda@nieruchomosci.pl">
            <MailIcon />
            amanda@nieruchomosci.pl
          </a>
          <a href="phone:730026439">
            <PhoneIcon />
            730 026 439
          </a>

        </InfoItemContent>
        <img src={data.amanda2.publicURL} alt="Amanda" />
      </InfoItem>

      <InfoItem>
        <InfoItemContent>
          <HighLightedHeading>Kamila Urbaniak</HighLightedHeading>
          <p>Agent DS nieruchomości</p>
          <p>
            Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach klienta.
          </p>
          <a href="mailto:kamila@nieruchomosci.pl">
            <MailIcon />
            kamila@nieruchomosci.pl
          </a>
          <a href="phone:730026439">
            <PhoneIcon />
            730 026 439
          </a>

        </InfoItemContent>
        <img src={data.kamila3.publicURL} alt="Kamila" />
      </InfoItem>

      <InfoItem>
        <InfoItemContent>
          <HighLightedHeading>Marta Kucharczyk</HighLightedHeading>
          <p>Agent DS nieruchomości</p>
          <p>
            Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach klienta.
          </p>
          <a href="mailto:marta@nieruchomosci.pl">
            <MailIcon />
            marta@nieruchomosci.pl
          </a>
          <a href="phone:730026439">
            <PhoneIcon />
            730 026 439
          </a>

        </InfoItemContent>
        <img src={data.marta4.publicURL} alt="Marta" />
      </InfoItem>

      <InfoItem>
        <InfoItemContent>
          <HighLightedHeading>Patrycja Biernaczyk</HighLightedHeading>
          <p>Agent DS nieruchomości</p>
          <p>
            Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach klienta.
          </p>
          <a href="mailto:patrycja@nieruchomosci.pl">
            <MailIcon />
            patrycja@nieruchomosci.pl
          </a>
          <a href="phone:730026439">
            <PhoneIcon />
            730 026 439
          </a>

        </InfoItemContent>
        <img src={data.patrycja5.publicURL} alt="Patrycja" />
      </InfoItem>
    </ContentWrapper>
  );
};

export const pageQuery = graphql`
    query {
            hero0: file(relativePath: {regex: "/zespol\/0_hero.jpg/"}) {
            publicURL
        }
            ania1: file(relativePath: {regex: "/zespol\/1_ania.jpg/"}) {
            publicURL
        }
            amanda2: file(relativePath: {regex: "/zespol\/2_amanda.jpg/"}) {
            publicURL
        }
            kamila3: file(relativePath: {regex: "/zespol\/3_kamila.jpg/"}) {
            publicURL
        }
            marta4: file(relativePath: {regex: "/zespol\/4_marta.jpg/"}) {
            publicURL
        }
            patrycja5: file(relativePath: {regex: "/zespol\/5_patrycja.jpg/"}) {
            publicURL
        }
    }
`;

export default zespol;
