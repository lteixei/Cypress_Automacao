/// <reference types="cypress" />
describe('DEMO WEB SHOP', () => {
    before(() => {
      cy.visit('https://iam-fqa-pf.internal.timbrasil.com.br/as/authorization.oauth2?response_type=code&code_challenge=Q7Pj9EQRaRaW6NHd0UEA07gtthDNSQ3e09u7XS9mE18&code_challenge_method=S256&client_id=pa_wam&redirect_uri=https%3A%2F%2Fsiebelposfqa01.oci.internal.timbrasil.com.br%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiVWFYU0diUU5KVFYxdkV4VjhPLTZNQXoxWjQ0Iiwic3VmZml4Ijoia1dId2syLjE3MDY1NjI4NjEifQ..uAKzVAO86CMTO-9rHqVOEg.5AzebJz0fXGmxUJWlvmmW7y3ba0K_8hCi0sSjG1PLGVXArGMxJLx-aepkS6PmylvPExCE8f0NxDKXsnKT3x3ZMbd8QuqJnlySg4iILoOBzlx_Q2Q6x7hzGRY9XCDPiSRcQ8WTBsxHK39ATltrAZThP927zgEcbn-fU4brU1i88ac-v0J1l3F4fqOXgIZ7zOW-xIul4L76j941HiCBEMuVyeb1w1zH8OH0m0wuatYXfxEV3ynV2zcRG6pG3QVXzWKEqFbi3Cu6a5tFTvonC50ats3JzS7yvrP1gycoraEGElPhFUV-JPiriez6SMtx0i5y6WfVC4CyN9UnL-wTa4zlkkVc40h5MNmIQtL1MSF_yM.HZVZ7qtiTGMeOzx6lppPyw&nonce=NV-COnawFyCd6URxj6ySEwAwYWa9Y7BKbRu1xbc29a4&scope=openid%20address%20email%20phone%20profile&vnd_pi_requested_resource=https%3A%2F%2Fsiebelposfqa01.oci.internal.timbrasil.com.br%2Fsiebel%2Fapp%2Fvnd%2Fptb%2F%3FSWECmd%3DGotoView%26SWEView%3DTIM%2BVendas%2B2.0%2B-%2BOUI%2BHome%2BPage%2BVendas%2BView%26SWERF%3D1%26SWEHo%3D%26SWEBU%3D1%26SWEApplet0%3DTIM%2BVendas%2B21%2B-%2BGFA%2BSenha%2BForm%2BBlank%2BApplet%26SWERowId0%3DVRId-0&vnd_pi_application_name=SIEBELPOS+FQA-Internal+%7C+SIEBELPOSFQA')
      cy.screenshot()
    })
    it('FAZER LOGIN', () =>{

    //LOGIN 
    cy.get('#username').type('T3000412')
    cy.get('#password').type('Tim@12345')
    cy.get('#signOnButton').click()
    //
    //cy.get('#Email').type('LLTEI@GMAIL.COM')
    //cy.get('#Password').type('123456')
    cy.get('#RememberMe').click()
    //
  //################################################################
    })
}) 
  // <reference types="cypress" />