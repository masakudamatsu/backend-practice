import React from 'react';
import {mount} from 'cypress-react-unit-test';
import TemplateComponent from 'src/components/TemplateComponent';

describe('TemplateComponent component', () => {
  it('gets rendered as before', () => {
    mount(<TemplateComponent />);
    cy.matchImageSnapshot();
    // cy.get('body').should('be.visible').matchImageSnapshot();
  });
});
