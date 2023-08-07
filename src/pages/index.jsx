/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck
import * as React from 'react';
import { graphql } from 'gatsby';
import HighLightedHeading from '../components/HighLightedHeading/HighLightedHeading';

import {
  Hero,
  HeroHeading,
  HeroParagraph,
  ContentWrapper,
  WelcomeSection,
  WelcomeSectionContent,
  WelcomeSectionImage,
  StyledList,
  StyledButton,
  ShowcaseSection,
  ShowcaseButtonsContainer,
  ShowcaseGallery,
  ShowcaseImage,
  StyledLinkButtonWrapper,
  StyledLinkButton,
  StyledArrowIcon,
  AdvantagesSection,
  ServicesSection,
  TeamSection,
  ReviewSection,
  ContactForm,
  TeamImage,
} from '../assets/styles/pages/HomePage.styles';

function HomePage({ data }) {
  const hero = data.hero.publicURL;
  const welcome = data.welcome.publicURL;
  console.log(data);

  return (
    <>
      <Hero image={hero}>
        {/* <GatsbyImage image={image} alt="intro" /> */}
        <HeroHeading>
          Biuro nieruchomości, którego potrzebujesz
        </HeroHeading>
        <HeroParagraph>Sprawdź co oznacza dla nas bezkonkurencyjność.</HeroParagraph>
      </Hero>
      <ContentWrapper>
        <WelcomeSection>
          <WelcomeSectionContent>
            <h2>Obsługę nieruchomości wymyśliliśmy na nowo</h2>
            <p>
              Modern studio to nowoczesne biuro nieruchomości z profesjonalnym i innowacyjnym podejściem do tematu nieruchomości i inwestycji.
            </p>
            <p>
              Klienci wybierają nas, ponieważ zakres naszych usług wykracza poza to, co jest w stanie zaoferować konkurencja.
            </p>
          </WelcomeSectionContent>
          <WelcomeSectionImage image={welcome} alt="" />
        </WelcomeSection>
        <AdvantagesSection>
          <HighLightedHeading>Dlaczego szukasz właśnie nas?</HighLightedHeading>
          <StyledList>
            <li>
              <h3>Kompleksowa obsługa</h3>
              <p>
                Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość?
                Zajmiemy się Twoją sprawą od A do Z, aby zaoszczędzić Twój czas.
              </p>
            </li>
            <li>
              <h3>Agent na wyłączność</h3>
              <p>
                W powieżane nam zlecenia angażujemy się w 100% - dzięki nam oszczędzisz maksimum czasu, zachowując przy ty pełną kontrolę.
              </p>
            </li>
            <li>
              <h3>Zgrany zespół</h3>
              <p>
                Doskonale rozumiemy Twoje potrzeby. jesteśmy zespołem o zróżnicowanych kompetencjach, dzięki którym świetnie się uzupełniamy.
              </p>
            </li>
          </StyledList>
        </AdvantagesSection>
        <ShowcaseSection>
          <h2>Oferta</h2>
          <ShowcaseButtonsContainer>
            <StyledButton isCentered>Bieżące oferty</StyledButton>
            <StyledButton isCentered>Nasze realizacje</StyledButton>
          </ShowcaseButtonsContainer>
          <ShowcaseGallery>
            <ShowcaseImage src={data.grid2.publicURL} alt="grid2" />
            <ShowcaseImage isBig src={data.grid3.publicURL} alt="grid3" />
            <ShowcaseImage src={data.grid4.publicURL} alt="grid4" />
            <ShowcaseImage isBig src={data.grid5.publicURL} alt="grid5" />
          </ShowcaseGallery>
          <ServicesSection>
            <HighLightedHeading>Twój komfort ponad wszystko</HighLightedHeading>
            <p>To, co dla innych biur nieruchomości wykracza poza zakres usług, dla nas jest standardem. Wyróżnia nas bezkompromisowa troska o interes klienta.</p>
            <StyledButton isCentered>Sprawdź pełen zakres naszych usług</StyledButton>
            <StyledList>
              <li>
                <h3>Pośrednictwo</h3>
                <p>Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości</p>
              </li>
              <li>
                <h3>Doradztwo</h3>
                <p>Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.</p>
              </li>
              <li>
                <h3>Home staging</h3>
                <p>Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura podnosi atrakcyjność oferty na rynku.</p>
              </li>
              <li>
                <h3>Współpraca</h3>
                <p>Poznański rynek znamy jak własną kieszeń - współpracując z nami wybierasz najlepszych deweloperów, prawników i architektów.</p>
              </li>
            </StyledList>
          </ServicesSection>
        </ShowcaseSection>
        <TeamSection>
          <HighLightedHeading>Poznaj nasz zespół</HighLightedHeading>
          <p>
            Dzięki doskonałej współpracy i przyjacielskiej atmosferze
            udało nam się stworzyć zespół dokosnały.
          </p>
          <StyledLinkButtonWrapper>
            <StyledLinkButton to="#">Sprawdź kim jesteśmy</StyledLinkButton>
            <StyledArrowIcon />
          </StyledLinkButtonWrapper>
          <TeamImage image={data.team1.publicURL} />
        </TeamSection>
        <ReviewSection>
          <HighLightedHeading>Co mówią o nas nasi klienci?</HighLightedHeading>
          <p>Bezkompromisowo wspieramy naszych klientów a ich satysfakcja jest dla nas najważniejszym celem.</p>
          <div>
            <div>
              <p>Udało się znaleźć kupca na nasze mieszkanie w jedne dzień! Cały proces był przeprowadzony bardzo sprawnie, profesjonalnie i dla nas jako klientów bezboleśnie. Ania ma prawdziwy dar tłumaczenia zawiłości i dopinania detali.</p>
              <p>Katarzyna</p>
            </div>
            <div>
              <p>Współpraca na najwyższym poziomie. Jeśli zależy Wam na szybkiej, bezproblemowej  sprzedaży czy zakupie mieszkania/ domu to nie ma lepszego miejsca.</p>
              <p>Kamila</p>
            </div>
          </div>
        </ReviewSection>
        <ContactForm action="#">
          <HighLightedHeading level="3">Napisz do nas</HighLightedHeading>
          <label htmlFor="email">Adres e-mail</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Adres e-mail</label>
          <textarea name="message" id="message" />
          <StyledButton>Wyślij</StyledButton>
        </ContactForm>
      </ContentWrapper>
    </>
  );
}

export default HomePage;

export function Head() {
  return <title>Home Page</title>;
}

export const pageQuery = graphql`
  query {
    hero: file(relativePath: {regex: "/homepage\/aaa-0_hero.jpg/"}) {
        publicURL
      },
    welcome: file(relativePath: {regex: "/homepage\/1_welcome.jpg/"}) {
        publicURL
      },
      grid2: file(relativePath: {regex: "/homepage\/2_grid.jpg/"}) {
        publicURL
      },
      grid3: file(relativePath: {regex: "/homepage\/3_grid.jpg/"}) {
        publicURL
      },
      grid4: file(relativePath: {regex: "/homepage\/4_grid.jpg/"}) {
        publicURL
      },
      grid5: file(relativePath: {regex: "/homepage\/5_grid.jpg/"}) {
        publicURL
      },
      team1: file(relativePath: {regex: "/homepage\/6_team.jpg/"}) {
        publicURL
      },
      team2: file(relativePath: {regex: "/homepage\/7_team.jpg/"}) {
        publicURL
      },
    }
`;
