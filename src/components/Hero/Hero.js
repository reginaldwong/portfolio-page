import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Reginald Wong <br/>
        Software Developer
      </SectionTitle>
      <SectionText>
        I am a front-end developer with a strong suit for design, functionality, and user experience.
      </SectionText>
      <Button onClick={() => window.open('mailto:reginaldwongdev@gmail.com')}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;