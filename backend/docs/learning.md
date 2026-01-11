# MODELS

## 1.CharField
CharField é um campo para textos curtos

você precisa colocar um parametro (max_length) que define o tamanho máximo

## 2.TextField
Para textos longos, não tem max_lenght obrigatorio

## 3.SlugField
para URLs amigaveis: uma-url-assim

## parametros principais:
    - blank         -> se pode ficar vazio no forms
    - bull          -> se pode ser NULL no banco
    - unique        -> valor não pode se repetir
    - default       -> valor padrão
    - verbose_name  -> nome amigavel no admin
    - help_text     -> texto de ajuda no admin

    - allow_unicode -> permite acentos

## ForeignKey
ForeignKey cria um relacionamento entre duas tabelas no banco de dados
> um objeto pertence ao outro

- um post pertence a uma categoria
- um produto pertence a um fornecedor
- um comentario pertence a um post

### on_delete!
define o que acontece quando o objeto relacionado é apagado:

- CASCADE       -> apaga os registros relacionados
- PROTECT       -> impede a exclusão
- SET_NULL      -> coloca NULL
- SET_DEFAULT   -> usa valor padrão
- DO_NOTHING    -> nao faz nada

### related_name!
define coomo acessar os objetos relacionados no modelo pai:
```python
class Post(models.Model):
    category = Models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='posts'
    )
```
isso permite fazer: `category.posts.all()`

## choices!
choices serve para limitar os valores possíveis de um campo
```python
class Post(models.Model):
    class Status(models.TextChoices):
        DRAFT = 'draft', 'Draft'
        PUBLISHED = 'published', 'Published'

    title = models.CharField(max_length=100)
    status = models.CharField(
        max_length=10,
        choices=Status.choices,
        default=Status.DRAFT
    )
```
