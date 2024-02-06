/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://apptimvendasdev.internal.timbrasil.com.br/43_0_07_UAT1/')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{
    })
  })
  //################################################################
  
  // <reference types="cypress" />
  describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
      cy.screenshot()
    })