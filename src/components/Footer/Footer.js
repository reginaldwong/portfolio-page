import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:reginaldwongdev@gmail.com">reginaldwongdev@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>I am interested in full time opportunities and am able to network at your convenience. However, if you have any other requests or questions, feel free to reach out to me!</Slogan>
      </CompanyContainer>
      <SocialIcons href="https://github.com/reginaldwong" target="_blank">
      <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://linkedin.com/in/reginaldwong/" target="_blank">
      <AiFillLinkedin size="3rem" />
     </SocialIcons>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
