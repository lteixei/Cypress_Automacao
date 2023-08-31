/// <reference types="cypress iframe" />
describe('SISTEMA TIM - SIEBEL', () => {
  before(() => {
    cy.visit('https://siebelposfqa01.oci.internal.timbrasil.com.br/siebel/app/crc/ptb/?SWECmd=Login&SWEPL=1&SRN=&SWETS=')
    cy.screenshot()
  })
  it('Novo Usuário', () =>{
    //
//LOGIN 
    cy.get('#USER').type('T3313299')
    cy.get('#PASSWORD').type('Tim@12345')
    cy.get('#btnSubmit').click()
    //
//TENTANDO LOGAR SEM SABER O LOGIN E A SENHA - USUÁRIO OU SENHA INVÁLIDOS  
    cy.contains('Bem-vindo(a)', { timeout: 20000 });
    //cy.iframe('Your project: 'Test Project'').find('#j_s_sctrl_tabScreen').click();
    //cy.get('#j_s_sctrl_tabScreen')
    cy.get('#ui-id-76').click() 
    //cy.get('/html/body/div[1]/div/div[6]/div/div[8]/div/div[1]/div/div/div[1]/div/div/form/div/div/span[2]/div[3]/div/div/table/tbody/tr[3]/td[2]/div/input[1]').click()
    cy.get('#s_1_1_1_0_PESSOA\ FÍSICA').check() 
    //
    //cy.get('html.applicationcache.audio.audio-ogg.audio-mp3.audio-opus.audio-wav.audio-m4a.canvas.canvastext.geolocation.hashchange.history.inputtypes-search.inputtypes-tel.inputtypes-url.inputtypes-email.no-inputtypes-datetime.inputtypes-date.no-inputtypes-month.no-inputtypes-week.inputtypes-time.inputtypes-datetime-local.inputtypes-number.inputtypes-range.inputtypes-color.notification.postmessage.postmessage-structuredclones.svg.no-touchevents.video.video-ogg.video-h264.no-video-h265.video-webm.video-vp9.no-video-hls.no-video-av1.webgl.websockets.cssanimations.backgroundsize.borderimage.borderradius.boxshadow.csscolumns.csscolumns-width.csscolumns-span.csscolumns-fill.csscolumns-gap.csscolumns-rule.csscolumns-rulecolor.csscolumns-rulestyle.csscolumns-rulewidth.no-csscolumns-breakbefore.no-csscolumns-breakafter.no-csscolumns-breakinside.flexbox.flexboxlegacy.fontface.generatedcontent.cssgradients.hsla.multiplebgs.opacity.no-cssreflections.rgba.textshadow.csstransforms.supports.csstransforms3d.csstransitions.localstorage.sessionstorage.no-websqldatabase.svgclippaths.inlinesvg.smil.webworkers.indexeddb.indexeddb-deletedatabase.siebui-navigation-tab.siebui-comm-panel-open body div#_sweclient div div#_swecontent.siebui-comm-panel-shown div div#_sweview.siebui-indent-content.siebui-dashboard-content-indent div div#_svf0.siebui-view div div.siebui-main-template6633.siebui-view-multi-column div.siebui-main-column66 div#S_A1 div#s_S_A1_div.siebui-applet.siebui-form.siebui-collapsible-applet.siebui-formapplet-column form div#a_1.NotSelected div.AppletBack.AppletHIFormBorder span.AppletStyleChild77 div.siebui-applet-content.siebui-collapsible div#a_1.NotSelected div.GridBorder table.GridBack tbody tr td div.mceGridField.siebui-value input.siebui-ctrl-radio').click()
    cy.get(':nth-child(5) > :nth-child(3) > .mceGridField > input').type('82145236996')
    cy.get('#s_1_1_3_0').click()
    //
//TESTANDO LOGAR COM E-MAIL DO GOOGLE - E-MAIL JÁ EXISTENTE
    
    //
//CADASTRANDO CONTA COM O E-MAIL LIBERADO
    
  })
})
      