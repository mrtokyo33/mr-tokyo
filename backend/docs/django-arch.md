# Arquitetura do DJANGO:

## O que é arquitetura?
Arquitetura não é pasta, nem arquivos, É RESPONSABILIDADE.

Cada camada existe para responder a uma pergutna específica.

Se misturarmos perguntas, o sistema vira bagunça total.

## 1. MODELS -> domínio + dados
### O que é:
No Django, os Models é onde vc coloca a informação sobre os dados. Ele contém os campos e comportamentos dos dados que vc vai armazenar. Geralmente, cada modelo mapeia uma única DB table.

- cada model é uma classe python que herda django.db.models.Model.
- Cada atributo de um modelo representa um campo no banco de dados.
- o DJANGO cria migrations com esse model.

> MODELS NÃO É SÓ ESTRUTURA DE TABELA, REPRESENTA AS REGRAS DE NEGÓCIO

## 2. SERIALIZERS -> contratos de dados 
### O que é:
Serializer é a fronteira entre o mundo interno e o externo.
> "Como meus dados saem do sistema?"
> "Como dados entram no sistema?"

Ele traduz:
- Python -> JSON
- JSON -> Python

Ele contém:
- validação de formato
- regras de exposição

> ele é um contrato: formato que o mundo pode ver/enviar

### 3. VIEWS -> controller HTTP
### O que é:
View responde:
> "Quando alguémm faz uma requisição HTTP, o que acontece?"

No Django:
- Recebe _Request_
- chama _Models_
- usa _Serializers_
- retorna _Response_

Ele NAO DEVE:
- conter lógica de dominio pesada
- formatar dados manualmente

COMO USAR: A view é um **orquestrador**:
- verifica permissão
- escolhe seriaizer
- escolhe queryset

## 4. URLS -> roteamento
### O que é:
URLS respondem:
> "Qual caminho chama qual comportamento?"

- ligam URL -> View
- não tem lógica
- não sabem de dados

## 5. ADMIN -> backoffice
### O que é:
Admin é literealemtne o painel de admin

serve para:
- criar conteúdo
- editar dados
- gerenciar sistema