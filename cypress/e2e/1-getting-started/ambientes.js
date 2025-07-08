// <reference types="cypress" />
describe('Livraria da Travessa', () => {
    before(() => {
      cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/vnd/ptb/?SWECmd=GotoView&SWEView=TIM+Vendas+2.0+-+OUI+Home+Page+Vendas+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=TIM+Vendas+21+-+GFA+Senha+Form+Blank+Applet&SWERowId0=VRId-0')
      cy.screenshot()
    })
    it('Novo Usuário', () =>{
      //
  //LOGANDO NO SITE  
     
      
  })
})