import React from 'react';

import Section from 'src/blocks/Section';
import {color} from 'src/utils/specColor';

const BannerForNoJs = () => {
  return (
    <Section
      backgroundColor={color.banner.background}
      fontColor={color.banner.font}
      linkTextBackground={color.banner.linkText.background}
      linkTextColor={color.banner.linkText.font}
    >
      <Section.Whitespace />
      <Section.Paragraph>
        For full functionality of this site, it is necessary to enable
        JavaScript.
      </Section.Paragraph>
      <Section.Whitespace betweenParagraphs />
      <Section.Paragraph>
        Here are the{' '}
        <a href="https://www.enable-javascript.com/">
          instructions how to enable JavaScript in your web browser
        </a>
        .{' '}
      </Section.Paragraph>
      <Section.Whitespace />
    </Section>
  );
};

export default BannerForNoJs;
