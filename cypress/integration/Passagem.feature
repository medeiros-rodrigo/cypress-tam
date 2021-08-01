Feature: Pesquisar Passagem

Como usuario, eu quero pesquisar uma passagem aerea no Latam

Scenario: Pesquisar passagem para 1 passageiro
    Given que eu acesso o latam
    When eu escolho um destino "Congonhas" - "Galeao"
    And uma data
    And eu pesquiso uma passagem
    Then deve obter os meus dados de pesquisa
    And retornar para "1" passageiros

Scenario: : Pesquisar passagem para 1 passageiro e 1 bebe
    Given que eu acesso o latam
    When eu escolho um destino "Congonhas" - "Galeao"
    And uma data
    And eu adiciono um passageiro ´Bebe´
    And eu pesquiso uma passagem
    Then deve obter os meus dados de pesquisa
    And retornar para "2" passageiros

Scenario: : Pesquisar passagem com a mesma origem e destino
    Given que eu acesso o latam
    When eu escolho um destino "Joao Pessoa" - "Joao Pessoa"
    Then deve retornar alerta com erro