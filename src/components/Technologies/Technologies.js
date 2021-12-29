import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Here are a few technologies I have been working with:
      </SectionText>
      <List>
        <ListItem>
          {/* <DiReact size="3rem" /> */}
          <ListContainer>
            <ListTitle>Languages</ListTitle>
            <ListParagraph>
              Experience with: <br />
              JavaScript (ES6+) <br />
              HTML <br />
              CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          {/* {/* <DiFirebase size="3rem" /> */}
          <ListContainer>
            <ListTitle>Frameworks/Libraries</ListTitle>
            <ListParagraph>
              Experience with: <br />
              React, TypeScript <br />
              Bootstrap, SASS <br />
              Styled Components
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          {/* <DiZend size="3rem" /> */}
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with: <br />
              Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
