# Infinite Scroll Idea

Esta é uma ideia que tive para implementação de um scroll infinito.

Basicamente, é um evento de scroll que verifica se um elemento (o qual denominei o id como "dock") está presente no viewport.

Se ele estiver presente no viewport, irá renderizar um novo blogpost, e assim sucessivamente.

Para alimentar os posts, escolhi uma implementação básica de fila que é alimentada no carregamento do script com meus próprios posts do dev.to. Se a fila estiver vazia, não irá mais carregar posts.

## Como rodar

Necessário ter o live server instalado!

```bash
$ git clone git@github.com:EronAlves1996/Infinite-Scroll-Idea.git
$ cd Infinite-Scroll-Idea
$ live-server
``` 
