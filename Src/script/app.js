// app.js

// Dados JSON (normalmente você carregaria isso de um arquivo externo)
const jsonData = {
  "assassinos": [
    {
      "nome": "O Trapper",
      "habilidade": "Armadilha de Urso",
      "descricao": "O Trapper pode colocar armadilhas de urso no chão que imobilizam e ferem sobreviventes quando ativadas.",
      "imagem": "./img/Traper.png",
      "historia": "Há um homem enorme e monstruoso com um sorriso horrível rasgado na máscara que continua perseguindo cada movimento meu. Semelhante a um caçador, ele nos rastreia, preparando armadilhas devastadoras entre a vegetação. Vigilância extrema e passos leves são essenciais para evitar o aperto de gelar o sangue de uma armadilha para ursos ou as garras do que passei a chamar de 'O Miserável Assassino Sorridente'."
    },
    {
      "nome": "O Wraith",
      "habilidade": "Capa do Wraith",
      "descricao": "O Wraith pode se tornar invisível e se mover mais rápido enquanto está encapuzado. Ele também pode se revelar para atacar sobreviventes.",
      "imagem": "./img/rahf.png",
      "historia": "Há outra aparição, mais aterrorizante do que qualquer coisa que já vi, caçando entre as sombras daqui. Move-se como uma silhueta, aparecendo e desaparecendo ao som de um temido sino. É impossível rastreá-lo. Várias vezes ele me pegou sem que eu o visse se aproximando."
    },
    {
      "nome": "Hillbilly",
      "habilidade": "Serra Elétrica",
      "descricao": "O Hillbilly usa uma serra elétrica para derrubar sobreviventes instantaneamente se eles forem atingidos enquanto ele a revê.",
      "imagem": "./img/hiibiliy.png",
      "historia": "Um homem mais terrível de se ver. Seu físico está todo distorcido e desfigurado por causa de algum acidente terrível. Ele carrega uma motosserra mortal e cruel que empunha com violência devastadora, aparentemente imbuindo-o de uma velocidade sobre-humana por um tempo. Sua vantagem também é uma fraqueza, pois o barulho alto pode revelar sua posição. Então, tentei aumentar meu senso de som. Aprimorando qualquer som que não seja proveniente da natureza."
    },
    {
      "nome": "Nurse",
      "habilidade": "Piscar",
      "descricao": "A Enfermeira pode piscar através de obstáculos para se teletransportar por curtas distâncias e atingir sobreviventes.",
      "imagem": "./img/nurse.png",
      "historia": "Um novo verme entrou na arena. Eu a vi enquanto ela, de alguma forma, atravessava uma parede. Vestido com bandagens que contam uma história incalculável de algo horrível. Esta... enfermeira, ao que parece, me traz uma nova angústia durante minhas noites solitárias, enquanto minha mente fica louca."
    },
    {
      "nome": "Hag",
      "habilidade": "Invocar Armadilhas",
      "descricao": "A Hag pode invocar armadilhas que explodem quando os sobreviventes se aproximam, causando dano e teleportando-a para a armadilha.",
      "imagem": "./img/hage.png",
      "historia": "Um novo terror espreita a escuridão; sua aparência me parece mais intensa do que as outras depois, apenas um vislumbre de sua silhueta abatida. Torcida e rasgada de maneiras indescritíveis, com pele morta acinzentada esticada sobre seu corpo emaciado. Seu braço é uma deformidade horrível e crescida, capaz de cortar carne e ossos. A própria presença dela fala de uma tortura sem fim semelhante à minha. Eu me pergunto - ela recusou o chamado da entidade até ser quebrada ou ela desejou isso?"
    },
    {
      "nome": "Doctor",
      "habilidade": "Choque Elétrico",
      "descricao": "O Doctor usa choque elétrico para causar dano e desorientar sobreviventes.",
      "imagem": "./img/doctor.png",
      "historia": "Tenho dificuldade em manter minha sanidade. A cada dia, este mundo em mudança me proporciona novas provações. Um homem vestindo vestes de médico cruzou meu caminho. De longe, eu o vejo andando por aí, procurando.. Mas ele não era...normal. Olhos e boca abertos, de uma forma dolorosa e perturbadora. De onde vêm esses demônios? Eu não confio nele, parece que ele quer trazer dor e não curar? Vou ficar longe, é a coisa mais sensata a fazer."
    },
    {
      "nome": "Huntress",
      "habilidade": "Arremesso de Machados",
      "descricao": "A Huntress pode arremessar machados para causar dano a sobreviventes à distância.",
      "imagem": "./img/hunteres.webp",
      "historia": "Uma figura vestida com cabeça de lebre. Uma visão muito perturbadora. Este novo inimigo guarda algo humano dentro dela. Alguns fragmentos da vida cotidiana. Ela parece ser uma caçadora. Conheci muitos seres diferentes neste lugar, mas este é o primeiro com uma habilidade natural para a caça. Em qualquer outro lugar poderia ser considerado um talento. Mas seu talento para rastrear, capturar e matar é outra coisa aqui. Há algo mais nela também, ela parece procurar alguma coisa."
    },
    {
      "nome": "Clown",
      "habilidade": "Arremesso de Frascos",
      "descricao": "O Clown usa frascos de gás para causar dano e desorientar sobreviventes.",
      "imagem": "./img/clow.png",
      "historia": "Ao viajar pelos véus nebulosos que demarcam os reinos deste lugar, vi que, pela primeira vez, não estava sozinho. Algo atravessou esses caminhos esquecidos, suas cores brilhantes ainda claramente visíveis, mesmo através do efeito silenciador da névoa que se agitava entre nós. Ao emergirmos num lugar novo, mas de certa forma familiar, vi-o claramente pela primeira vez: uma caravana de Carney, puxada por algo que parecia ser um cavalo, mas que era, aos meus olhos, mais velho e mais terrível. Observei das árvores quando uma rachadura apareceu na porta e uma luz quente e dourada se espalhou por este lugar desolado."
    },
    {
      "nome": "Spirit",
      "habilidade": "Fúria Espiritual",
      "descricao": "O Spirit pode se mover rapidamente e atacar com uma força terrível.",
      "imagem": "./img/spirit.png",
      "historia": "Ela herdou uma fúria incrível de seus ancestrais. A ira que corre em suas veias é seu legado. A dor terrível que ela sofreu desencadeou tudo. Rápido e letal, o Espírito exige sua vingança indefinidamente."
    },
    {
      "nome": "Legion",
      "habilidade": "Frenesi Selvagem",
      "descricao": "A Legion é um grupo unido de Assassinos assassinos, unidos pelo desejo de distribuir dor em igual medida.",
      "imagem": "./img/legiao.png",
      "historia": "A Legião é um grupo unido de Assassinos assassinos, unidos pelo desejo de distribuir dor em igual medida. Mantenha as lesões com Feral Frenzy, uma corrida de alta intensidade que pode desencadear uma reação em cadeia devastadora. Os sobreviventes estarão constantemente cuidando de seus ferimentos, deixando-os vulneráveis a serem abatidos um por um."
    },
    {
      "nome": "Plague",
      "habilidade": "Vômito Contagioso",
      "descricao": "A Plague pode infectar geradores e sobreviventes com seu vômito, que causa dano ao longo do tempo.",
      "imagem": "./img/plague.png",
      "historia": "Os métodos tradicionais de cura são ineficazes contra o vil Expurgo da Peste, que pode infectar geradores e Sobreviventes. Poças de Devoção são o único refúgio para a propagação da pestilência. Quanto mais os Sobreviventes se curam, mais forte se torna o poder da Peste, transformando sua Expurgação em um projétil de dor doentio."
    },
    {
      "nome": "Oni",
      "habilidade": "Rugido da Ira",
      "descricao": "O Oni pode se tornar extremamente poderoso ao consumir a raiva de sobreviventes feridos.",
      "imagem": "./img/oni.png",
      "historia": "Redefina a ira com o Oni, uma força verdadeiramente formidável. Sobreviventes feridos deixam um rastro de Orbes de Sangue, alimentando a raiva do Oni e deixando-o em estado de fúria. Ao liberar um rugido horripilante, o Oni ganha a habilidade de atacar com propósito vingativo, derrubando instantaneamente qualquer um em seu caminho."
    },
    {
      "nome": "Deathslinger",
      "habilidade": "Arpão Redeemer",
      "descricao": "O Deathslinger usa um arpão de longa distância para capturar e puxar sobreviventes.",
      "imagem": "./img/def.png",
      "historia": "Ao capturar a presa de surpresa, o Deathslinger usa sua arma artesanal – The Redeemer – para espetar Sobreviventes em fuga com um arpão de longa distância. Mira precisa, rastreamento paciente e previsões precisas são cruciais para acertar tiros, mas a recompensa do grito de um Sobrevivente ao ser puxado nunca soará tão doce."
    },
    {
      "nome": "Blight",
      "habilidade": "Vômito Corrosivo",
      "descricao": "O Blight pode ricochetear em superfícies e alterar sua trajetória para atingir sobreviventes.",
      "imagem": "./img/image.png",
      "historia": "Capaz de ganhar terreno sobre os Sobreviventes em poucos instantes, a eficiência letal do The Blight nunca deve ser subestimada. Com a capacidade de ricochetear em superfícies e realinhar sua trajetória, sua presença implacável força os Sobreviventes a tomarem decisões precipitadas. A curva de aprendizado pode parecer íngreme, mas dominar The Blight vale a pena."
    }
    
    
  ]
}


function criarAssassinos() {
  const container = document.getElementById('assassinos-container');

  jsonData.assassinos.forEach(assassino => {
    const card = document.createElement('div');
    card.className = 'assassino-card';

    const img = document.createElement('img');
    img.src = assassino.imagem;
    img.alt = assassino.nome;
    card.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = assassino.nome;
    card.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = assassino.descricao;
    card.appendChild(p);

    const pHistoria = document.createElement('p');
    pHistoria.textContent = assassino.historia;
    pHistoria.className = 'assassino-historia';
    card.appendChild(pHistoria);

    container.appendChild(card);
  });
}

// Função para buscar assassinos
function buscarAssassino() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const assassinoCards = document.querySelectorAll('.assassino-card');

  assassinoCards.forEach(card => {
      const nome = card.querySelector('h3').textContent.toLowerCase();

      if (nome.includes(input)) {
          card.style.display = 'block'; 
      } else {
          card.style.display = 'none';  
      }
  });
}

document.getElementById('enter-button').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('assassinos-title').style.display = 'block'; // Mostrar título
    document.getElementById('search-input').style.display = 'block'; // Mostrar barra de pesquisa
    document.getElementById('back-button').style.display = 'block'; // Mostrar botão de voltar
});

// Ações do botão "Voltar"
document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('assassinos-title').style.display = 'none'; // Esconder título
    document.getElementById('search-input').style.display = 'none'; // Esconder barra de pesquisa
    document.getElementById('back-button').style.display = 'none'; // Esconder botão de voltar
});

criarAssassinos();