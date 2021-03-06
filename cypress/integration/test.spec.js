/// <reference types= "cypress" />

describe('Should Open Latam Website', () =>{
    before(() =>{
        cy.visit('https://www.latamairlines.com/br/pt')
        cy.viewport(550, 750)
    })

    it('search', () =>{
        // CLOSE POP UPS
        cy.xpath('/html/body/div[3]/div/div/div/div/button').click()
        cy.xpath('//*[@id="cookies-politics-button"]').click()
        

        // Selecionar Ida
        cy.xpath('//*[@id="lblInputOrigin"]').click()
        cy.xpath('//*[@id="txtInputOrigin"]').type('Congonhas')
        cy.xpath('//*[@id="btnItemAutoComplete_0"]').click()
        cy.xpath('//*[@id="btnContinueCTA"]').click()
        
        // selecionar Volta
        cy.xpath('//*[@id="lblInputDestination"]').click()
        cy.wait(1500)
        cy.xpath('//*[@id="txtInputDestination"]').type('Galeao')
        cy.wait(1500)
        cy.xpath('//*[@id="btnItemAutoComplete_0"]').click()
        cy.xpath('//*[@id="btnContinueCTA"]').click()

        cy.wait(1500)  
        // Selecionar Data
        cy.xpath('//*[contains(text(),"Adicionar data")]').click()
        cy.xpath("(//*[@class='CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2 CalendarDay__lastDayOfWeek CalendarDay__lastDayOfWeek_3'])[3]").scrollIntoView()

        cy.xpath("(//*[@class='CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2 CalendarDay__lastDayOfWeek CalendarDay__lastDayOfWeek_3'])[3]").click({ force: true })
    
        cy.xpath("(//*[@class='CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2 CalendarDay__lastDayOfWeek CalendarDay__lastDayOfWeek_3'])[4]").click({ force: true })
 
        cy.xpath("//*[contains(text(),'Confirmar')]").click()


        // Procurar Voos
        cy.xpath("//*[contains(text(),'Procurar voos')]").click()
        
        // Validação: Número de Passageiros
        cy.xpath("//*[@data-test='TestMobileTotalCantPax']").contains("1")
        
        // Validação: Destino de Ida e Volta
        cy.wait(10000)  
        cy.xpath('//*[@id="WrapperOriginDestination"]/div[1]').contains("São Paulo").contains("Rio de Janeiro")

        // Validação: Data de Viagem
        cy.xpath("//*[@id='WrapperOriginDestination']/div[2]").contains("Dom 15 Ago")
        cy.xpath("//*[@id='WrapperOriginDestination']/div[2]/span[3]").contains("Dom 29 Ago")



    })
})