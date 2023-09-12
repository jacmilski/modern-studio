// @ts-nocheck
/* eslint-disable no-undef */
import React from 'react';
import { graphql } from 'gatsby';
import HighLightedHeading from '../components/HighLightedHeading/HighLightedHeading';
import {
  StyledContentWrapper,
  IntroSection,
  PortfolioItem,
} from '../assets/styles/pages/Realizacje.styles';
import { CornerEffect } from '../components/CornerEffectProvider/CornerEffect';

const Realizacje = ({ data }) => {
  return (
    <StyledContentWrapper isSubpage>
      <CornerEffect position="rightBottom" size="100px" distance="30px">
        <IntroSection>
          <div>
            <HighLightedHeading>Poznaj nasze realizacje</HighLightedHeading>
            <p>
              Każda współpraca to dla nas wspaniała przygoda, a to co po niej pozostaje, to pełna satysfakcja naszych klientów. Sprawdź, co udało nam się do tej pory osiągnąć.
            </p>
          </div>
          <img src={data.intro.publicURL} alt={data.intro.publicURL} />
        </IntroSection>
      </CornerEffect>
      <CornerEffect position="leftTop" size="100px" distance="30px" color="beige">
        <PortfolioItem isOdd>
          <div>
            <HighLightedHeading>ul. Sielska</HighLightedHeading>
            <p>
              Usługa obejmowała zarówno pośrednictwo w wynajmie nieruchomości, jak również pełną aranżację wnętrza i przestrzeni mieszkania. Nieruchomość została zarezerwowana na 1 prezentacji.
            </p>
          </div>
          <img src={data.sielska.publicURL} alt={data.sielska.publicURL} />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect position="rightBottom" size="100px" distance="30px" color="dark">
        <PortfolioItem>
          <div>
            <HighLightedHeading>ul. Fieldorfa</HighLightedHeading>
            <p>
              Mieszkanie sprzedawane przez zaprzyjaźnionych właścicieli, z którymi połączyłyśmy transakcję sprzedaży nieruchomości z zakupem ich nowego mieszkania.
            </p>
          </div>
          <img src={data.fieldorfa.publicURL} alt={data.fieldorfa.publicURL} />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect position="leftTop" size="100px" distance="30px" color="beige">
        <PortfolioItem isOdd>
          <div>
            <HighLightedHeading>ul. Rolna</HighLightedHeading>
            <p>
              Nietuzinkowe mieszkanie, które zarówno na nas jak i na klientach zrobiło ogromne wrażenie, a wisienką na torcie był przestronny i klimatyczny taras na dachu.
            </p>
          </div>
          <img src={data.rolna.publicURL} alt={data.rolna.publicURL} />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect position="rightBottom" size="100px" distance="30px" color="beige">
        <PortfolioItem isFullWidth>
          <div>
            <HighLightedHeading>ul.Staszica</HighLightedHeading>
            <p>
              Transakcja wynajmu mieszkania, przy której na naszych oczach zrodziła się piękna przyjaźń między Wynajmującą - Panią Katarzyną, a Najemczynią - Panią Gosią
            </p>
          </div>
          <div>
            <img src={data.staszica.publicURL} alt={data.staszica.publicURL} />
          </div>
        </PortfolioItem>
      </CornerEffect>
    </StyledContentWrapper>
  );
};

export const pageQuery = graphql`
    query {
        intro: file(relativePath: {regex: "/realizacje\/0_intro.jpg/"}) {
      publicURL
    }
        sielska: file(relativePath: {regex: "/realizacje\/1_sielska.jpg/"}) {
      publicURL
    }
        fieldorfa: file(relativePath: {regex: "/realizacje\/2_fieldorfa.jpg/"}) {
      publicURL
    }
        rolna: file(relativePath: {regex: "/realizacje\/3_rolna.jpg/"}) {
      publicURL
    }
        staszica: file(relativePath: {regex: "/realizacje\/4_staszica.jpg/"}) {
      publicURL
    }
  }
`;

export default Realizacje;
