
# ADAGIO

Adagio é uma plataforma para músicos que desejam marcar encontros musicais, além disso é possível publicar canções autorais, vídeos, marcar Jam Sessions e muito mais.

Este repositório contem o código fonte e informações relacionadas a versão mvp utilizada apenas durante o processo de brainstorming e analise de requisitos da aplicação web da Adagio.

Orgulhosamente open-source e desenvolvido com [Next.js](https://nextjs.org/).



## Informações aos desenvolvedores

Para rodar este projeto utilize
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```


### Atores do Sistema
Tipos de usuários que interagem com o sistema



| Ator  | Descrição |
| ------------- | ------------- |
| Visitante  | Refere-se às pessoas que acessam o sistema Adagio sem estar autenticadas  |
| Usuário  | Pessoas cadastradas e autenticadas no sistema  |
| Administrador  | Usuários com funções administrativas do sistema  |
| Músico  | Usuário com habilidades verificadas  |


### Requisitos Funcionais

Esta seção descreve as funcionalidades esperadas para esta versão do Adagio.

|RF1 -  **Registrar novo Usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um visitante crie uma nova conta|



|RF2 -  **Autenticar Usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um visitante entre em sua conta|



|RF3 -  **Editar Perfil**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um usuário edite o seu perfil|



|RF4 -  **Adicionar habilidades musicais**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um usuário adicione habilidades musicais |



|RF5 -  **Validar habilidades musicais**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um usuário anexe um vídeo para verificar a sua habilidade |



|RF6 -  **Agendar encontro músical**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um músico agende um encontro musical com outros músicos|



|RF7 -  **Convidar usuários**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um músico convide usuários para o encontro músical|



|RF8 -  **Aceitar/rejeitar convite** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um usuário confirme ou rejeite a participação na Jam session|



|RF9 -  **Definir setlist**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um músico configure um setlist para o encontro músical|



|RF10 -  **Definir privacidade do encontro músical**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um músico configure a privacidade do encontro musical para somente amigos ou público|



|RF11 -  **Definir limite de participações do encontro músical**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um músico configure a quantidade máxima de usuários para o encontro musical|



|RF12 -  **Publicar mídia do encontro musical**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que os músicos presentes no encontro publique fotos e vídeos do encontro|




|RF13 -  **Enviar convite de amizade** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o usuário envie um convite de amizade para outros usuários|



|RF14 -  **Aceitar/rejeitar convite de amizade** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o usuário que recebeu um convite de amizade aceite ou rejeite a solicitação|



|RF15 -  **Remover amigos** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o usuário desfaça amizade com outro usuário|



|RF16 -  **Bloquear usuário** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o usuário bloqueie outro usuário|



|RF17 -  **Criar Jam session virtual** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o músico inicie uma jam session virtual|



|RF18 -  **Enviar vídeo da Jam session** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que os músicos enviem um vídeo tocando para a jam session virtual|



|RF19 -  **Apagar vídeo da Jam session** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o músico apague seu vídeo tocando da jam session |



|RF20 -  **Ajustar vídeo da Jam session** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o músico sincronize seu vídeo tocando com os outros vídeos da Jam session|



|RF21 -  **Convidar amigos para a Jam Session** |
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o músico convide amigos para participar de uma Jam session fechada|



|RF22 -  **Ajustar política de participação da Jam Session**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o músico configure a Jam session para ser privada (somente convidados podem enviar vídeos) ou pública (onde todos podem enviar videos formando versões)|



|RF23 -  **Encerrar a conta**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que um usuário encerre a conta, apagando tudo relacionado ao seu perfil.|




|RF24 -  **Ver todos os usuários**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o administrador liste todos os usuários cadastrados.|



|RF25 -  **Apagar um usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o administrador apague a conta de um usuário|



|RF26 -  **Editar perfil de um usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o administrador edite o perfil de um usuário|



|RF27 -  **Banir usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o administrador bana a conta de um usuário|



|RF28 -  **Desbanir usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o administrador desfaça o banimento da conta de um usuário|




|RF29 -  **Visualizar logs de usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o administrador visualize os logs de ações dos usuários|



|RF30 -  **Visualizar logs de usuário**|
| :- |
|**prioridade**: Essencial|
|**Descrição**: O sistema deve permitir que o administrador visualize os logs de ações dos usuários|

