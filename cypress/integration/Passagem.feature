Feature: Pesquisar Passagem

Como usuario, eu quero pesquisar uma passagem area no Latam

Scenario: Pesquisar passagem para 1 passageiro
    Given eu escolho um destino e uma data
    When eu pesquiso uma passagem
    Then deve obter resultados para a busca
