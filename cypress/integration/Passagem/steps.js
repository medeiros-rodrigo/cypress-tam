
Given(/^que eu acesso o latam$/, () => {
	cy.visit('https://www.latamairlines.com/br/pt')
    cy.viewport(550, 750)
    cy.xpath('/html/body/div[3]/div/div/div/div/button').click()
    cy.xpath('//*[@id="cookies-politics-button"]').click()
});



When(/^eu escolho um destino "([^"]*)" - "([^"]*)"$/, (origem, destino) => {
    // Selecionar Ida
    cy.xpath('//*[@id="lblInputOrigin"]').click()
    cy.xpath('//*[@id="txtInputOrigin"]').type(origem)
    cy.xpath('//*[@id="btnItemAutoComplete_0"]').click()
    cy.xpath('//*[@id="btnContinueCTA"]').click()
        
    // selecionar Volta
    cy.xpath('//*[@id="lblInputDestination"]').click()
    cy.wait(1500)
    cy.xpath('//*[@id="txtInputDestination"]').type(destino)

    if (origem != destino){
        cy.wait(1500)
        cy.xpath('//*[@id="btnItemAutoComplete_0"]').click()
        cy.xpath('//*[@id="btnContinueCTA"]').click()

        cy.wait(1500) 
    }

});

When(/^uma data$/, () => {
    cy.xpath('//*[contains(text(),"Adicionar data")]').click()
    cy.xpath("(//*[@class='CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2 CalendarDay__lastDayOfWeek CalendarDay__lastDayOfWeek_3'])[3]").scrollIntoView()
    cy.xpath("(//*[@class='CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2 CalendarDay__lastDayOfWeek CalendarDay__lastDayOfWeek_3'])[3]").click({ force: true })

    cy.xpath("(//*[@class='CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2 CalendarDay__lastDayOfWeek CalendarDay__lastDayOfWeek_3'])[4]").click({ force: true })

    cy.xpath("//*[contains(text(),'Confirmar')]").click()
});

When(/^eu pesquiso uma passagem$/, () => {
	cy.xpath("//*[contains(text(),'Procurar voos')]").click()
});

Then(/^deve obter os meus dados de pesquisa$/, () => {
		// Validação: Destino de Ida e Volta
        cy.wait(10000)  
        cy.xpath('//*[@id="WrapperOriginDestination"]/div[1]').contains("São Paulo").contains("Rio de Janeiro")
    
        // Validação: Data de Viagem
        cy.xpath("//*[@id='WrapperOriginDestination']/div[2]").contains("Dom 22 Ago")
        cy.xpath("//*[@id='WrapperOriginDestination']/div[2]/span[3]").contains("Dom 5 Set")
});

Then(/^retornar para "([^"]*)" passageiros$/, (quantidadeDePassageiros) => {
    cy.xpath("//*[@data-test='TestMobileTotalCantPax']").contains(quantidadeDePassageiros)
});

When(/^eu adiciono um passageiro ´Bebe´$/, () => {
	cy.get('#iconAddPassengerCTA').click()
    cy.get('#addInfant').click()
    cy.get('#sendCallback').click()
});


Then(/^deve retornar alerta com erro$/, () => {
	cy.get('.xp-Alert-Title').contains("Não encontramos um resultado que coincida com sua busca")
});
