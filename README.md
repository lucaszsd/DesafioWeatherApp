# Weather App - Desafio Builders

O app consiste de um app de previsão de tempo, ao carregar, ele busca de APIS dados metereológicos sobre a cidade selecionada. Sendo que nessa primeira versão, é possivel selecionar outras cidades no botão no canto superior esquerdo. 

É possivel atualizar os dados carregados clicando num botão, no canto superior direito

P.S.: A escolha da API utilizada foi a recomendada no desafio, mas usando a fonte da RapidAPi, pois a minha chave diretamente do site da API original estava dando problema
 
## Rodar o projeto

Para rodar o projeto, o procedimento é o padrão: 
- Clone the project - `git clone https://github.com/lucaszsd/WeatherApp`.  
- Instalar as depencências - `yarn install`
- Rode com `yarn android`
 
 Também adicionei o APK para instalar no Android no repositorio [Nesse link](https://github.com/lucaszsd/DesafioWeatherApp/blob/main/app-release.apk). Para instalar basta aceitar instalar aplicativos de fora da Google Play.
 
## Design

Para a consistencia do design, mantive usando a biblioteca de componentes [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) que segue o Design System [Eva Design](https://eva.design/). Sobre o layout, foi mantido o mais simples 

Sobre possiveis melhorias adicionaria animações, mais detalhes de clima e uma lista de cidades selecionadas pelo usuário.. Outra melhoria que costumo utilizar é invés de "spinners" ao carregar, usar [Shimmer Placeholder](https://github.com/tomzaku/react-native-shimmer-placeholder), que mostram já um preview da interface a ser carregada. 
Também traduzir parte dos dados que vem em inglês, sobre a descrição do clima, não o traduzi pois não encontrei na documentação alguma referencia com as possiveis saidas. 
Outra melhoria seria criar um fundo dinamico que muda de acordo com o horario/clima do dia. Exemplo um fundo escuro pela noite, e mais claro pelo dia, com imagens de nuvens quando nublado, ou mostrando o ceu limpo, quando o clima está também limpo.
   


## Tech Stuff

O projeto foi criado baseado no seguinte [boilerplate](https://github.com/shettayyy/React_Native_Seed)

Para o gerenciamento das ações dentro do app estou usando redux através do [Redux Toolkit](https://redux-toolkit.js.org/). Uma melhoria imediata seria persistir os dados, que por agora, não está sendo feito. A cada vez que é carregado o app novamente, os dados anteriores estao sendo perdidos

Desenvolvi usando emulador para Android, não tive como testar no iOS, então pode ter alguma incompatibilidade a ser resolvida para iPhone, como exemplo o ajuste do espaço do "notch"

## Capturas de Tela

![Captura de tela](https://github.com/lucaszsd/DesafioWeatherApp/blob/main/screenshots/Screenshot_1646754144.png)
 
 
 

