# PSEUDO CODE PARA O ARTICLE

## O que um article tem?
- Title: (string)
- Category: (Category)
- slug: (string)
- Status: (draft/published)
- Content: (LaTex)
- Created_at: (timestamp)
- Updated_at: (timestamp)

## Quais regras de negócio ele possui?
- Um artigo deve ter um título
- Um artigo deve ter uma categoria
- categoria nao pode ser vazia
- titulo nao pode ser vazio
- o conteudo deve estar em LaTex valido
- um artigo nao é público quando estiver em draft
- se o conteúdo for vazio é um artigo sem conteúdo
- editar o conteúdo nao altera a data de criação
- atualizações alteram a data de modificação
- a URL deve conter o slug
- o slug deve ser gerado automaticamente
- o slug deve ter um modelo valido

## funções que ela deve possuir?
- publish()
    - muda status para published
    - define regras de publicação
- unpublish()
    - volta para draft
- is_public()
    - retorna se o artigo pode ser exibido
- generate_slug()
    - cria slug baseada no titulo
    - garante unicidade
- clean()
    - garante regras mínimas do domínio