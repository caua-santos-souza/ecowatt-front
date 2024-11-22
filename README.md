### Descritivo do Projeto: Ferramentas de Viabilidade Sustentável  

#### **Justificativa do Projeto**  
Com a crescente preocupação global sobre as mudanças climáticas e os impactos ambientais gerados por fontes de energia convencionais e veículos movidos a combustíveis fósseis, a busca por alternativas sustentáveis tornou-se uma prioridade. A transição para o uso de tecnologias como energia solar e carros elétricos não é apenas uma questão de consciência ambiental, mas também de economia e eficiência energética.  

No entanto, muitas pessoas ainda enfrentam dificuldades em compreender os reais benefícios dessas alternativas e em avaliar a viabilidade econômica de sua adoção. A falta de informação clara e objetiva cria barreiras, limitando o avanço de soluções que podem transformar positivamente a relação entre consumo energético, custo financeiro e impacto ambiental.  

Nosso projeto surge com o objetivo de eliminar essas barreiras, fornecendo ferramentas simples, acessíveis e intuitivas que ajudem os usuários a tomarem decisões informadas, promovendo a sustentabilidade e incentivando o consumo consciente.  

#### **Objetivos do Projeto**  
1. **Empoderar o usuário**: Oferecer ferramentas que auxiliem os consumidores a entenderem o custo-benefício de adotar tecnologias sustentáveis, como painéis solares e veículos elétricos.  
2. **Promover a sustentabilidade**: Incentivar a redução do impacto ambiental por meio da adoção de alternativas energéticas mais limpas e eficientes.  
3. **Facilitar a tomada de decisão**: Proporcionar dados claros e objetivos para que os usuários avaliem se a transição para soluções sustentáveis é viável em seu contexto específico.  
4. **Contribuir para o meio ambiente**: Reduzir as emissões de gases de efeito estufa e o consumo de recursos naturais não-renováveis, incentivando o uso de fontes de energia renováveis e veículos elétricos.  

#### **Funcionamento do Projeto**  
Após acessar nosso site, o usuário realizará um cadastro e, posteriormente, fará login para acessar as duas ferramentas principais:  

1. **Calculadora de Viabilidade de Painel Solar**  
   - **Como funciona**: O usuário informa o valor de sua última conta de energia e o consumo mensal em kWh. A calculadora analisará esses dados para determinar a viabilidade econômica da instalação de um sistema de energia solar.  
   - **Resultados esperados**: O cliente receberá um relatório objetivo sobre os benefícios financeiros de adotar a energia solar, incluindo estimativas de redução de custos e o impacto ambiental positivo de sua decisão.  

2. **Calculadora de Viabilidade de Carro Elétrico**  
   - **Como funciona**: O usuário informa a quilometragem mensal de seu veículo, a eficiência de seu carro a gasolina (Km/L), a eficiência do carro elétrico (Km/kWh) e o estado de residência. Com base nesses dados, a ferramenta analisará fatores como custo de energia elétrica, economia de combustível e emissões de CO₂.  
   - **Resultados esperados**: A calculadora fornecerá uma análise detalhada sobre os benefícios financeiros e ambientais de substituir um carro à combustão por um carro elétrico, considerando os custos regionais de energia elétrica e combustível.  

#### **Importância Ambiental**  
Nosso projeto não apenas ajuda os indivíduos a economizarem dinheiro, mas também desempenha um papel crucial na proteção do meio ambiente. Ao promover o uso de energia solar e veículos elétricos, incentivamos:  
- **Redução das emissões de gases de efeito estufa**, responsáveis pelo aquecimento global.  
- **A diminuição da dependência de fontes de energia não-renováveis**, como petróleo e carvão.  
- **O incentivo ao consumo consciente e responsável**, contribuindo para um futuro mais sustentável para as próximas gerações.  

Com estas ferramentas, nosso projeto visa não apenas informar, mas inspirar uma transformação cultural, onde sustentabilidade e eficiência energética sejam prioridades para todos. Este é mais do que um serviço: é um movimento em prol de um planeta mais limpo e saudável.

## Desenvolvedores

1. Luigi Berzaghi Hernandes Sespedes - RM555516
2. Guilherme Pelissari Feitosa - RM558445
3. Caua dos Santos Souza - RM559093

## instruções
Para executar o projeto, você precisará seguir os seguintes passos:
## Instalar Bibliotecas utilizadas

# emailjs

npm install emailjs

# api Java

Para executar a API, precismos seguir os seguintes passos:

Abrir o cmd da máquina, digitar: 

cd <diretório do seu eclipse workspace>
git clone https://github.com/LuigiBerzaghi/EcoWatt

após isso, devemos abrir o Eclipse, clcar em File-->import-->Maven-->Existing maven project
e então selecionar o arquivo do diretório que acabamos de 'clonar'.

a api támbem pode ser instalada localmente usando o entregavel.

feito isso, é importante verificar se os marketplaces necessários estão instalados, podemos fazer essa verificação em:

help-->eclipse marketplace-->installed

precisamos das duas bibliotecas de web tools e da biblioteca m2e

após verificar a existência das bibliotecas, clicamos com o botão direito no projeto 'EcoWatt'-->Run as-->Run on server

agora iremos criar um server

abrimos a pasta 'apache' e selecionamos o servidor da versão TomCat9.0

após isso, clicamos em 'Download and Install...', para que o eclipse baixe as configurações da versão selecionada do TomCat,
agora clicamos em 'Finish'.

agora, voltando na parte de 'Run on server', podemos clicar em 'next'.

nessa aba, precisamos garantir que o nosso projeto 'EcoWatt' esteja na coluna chamada 'configured', posicionada no lado diretiro da tela,
e agora podemos clicar em 'Finish'.

Agora o servidor será automaticamente incializado e podemos usar o vercel ou o localhost:3000 para as funcionalidades da nossa API

caso a api não rode, verifique os warnings, e de quick six (as vezes causa algum conflito de versão), caso tenha 2 versões de quick fix,
use a opção de export. se mesmo assim não rodar, verifique se a api esta rodando na versão do seu apache, clique com o botão direito na api,
propertis-->target runtimes e veja se a versão é a mesma instalada no seu computador. para verificar a sua versão vá em window-->preferences-->server-->runtime environmantes e selecione a mesma versão na api.

fazendo isso a api deve funcionar normalmente, ela já esta hospedada em um banco de dados, usando o link:

http://localhost:8080/EcoWatt/api/clientes com a api rodando é possivel ver as alterações de CRUD.

caso queira rodar a api no seu banco de dados oracle, crie a tabela que esta no entregável, em seguida, basta ir em src-->main-->Java-->br-->com-->ecowatt-->model-->dao-->util-->credenciais.java e alterar para os dados do seu oracle.


# links

Github:  https://github.com/caua-santos-souza/ecowatt-front
Vercel:  https://ecowatt-front-gamma.vercel.app/
Youtube: https://www.youtube.com/watch?v=AouON0ohOVY
Tutorial de instalação(caso necessário): https://www.youtube.com/watch?v=vCMGxxJ_H6M
