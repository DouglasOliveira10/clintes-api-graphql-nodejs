# Clientes API GraphQL

| Data | Autor | Comentários | Versão |
| --- | --- | --- | --- |
| 19/02/2020 | Douglas Oliveira  | Versão de lançamento | 1.0.0-RELESE |

---

## Objetivo

O objetivo do sistema é ser um exemplo de API utilizando GraphQl + Apollo Server em node js. O projeto pode ser baixado e ultilizado como back-end para profissionais front-end ou simplismente uma base de estudos ultilizando o postman. O graphql esta integrado com sistema [clientes api spring boot](https://github.com/DouglasOliveira10/clientes-api-spring-boot). Sugestões são bem vindas!

---

## Inicializando o Sistema

Construa a aplicação com __npm install__, logo após, é possível executar a aplicação via linha de comando:
```npm start```

---

## Querys GraphQL

As seguintes chamadas estão disponiveis para clientes:

**Listar Clientes**

```
query {
  clientes {
    httpStatusCode 
    errors
    message
    data {
      pageNumber
      pageSize
      totalSize
      items {
        id 
        nome 
        idade 
        endereco {
          id
          cep
          logradouro
          bairro
          localidade
          uf
        }
      }
    }
  }
}
```

**Buscar Cliente por id**

```
query {
  cliente(id: -1) {
    httpStatusCode
    errors
    message
    data {
      id
      nome
      idade
      endereco {
        id
        cep
        logradouro
        complemento
        bairro
        localidade
        uf
      }
    }
  }
}
```
**Inserir Cliente**

```
mutation {
  inserirCliente(cliente: {
    nome: "Eduardo"
    idade: 32
    idEndereco: 1    
  }) {
    httpStatusCode
    errors
    message
    data {
      id
      nome
      idade
    }
  }
}
```
**Atualizar Cliente**

```
mutation {
  atualizarCliente(cliente: {
    id: -1
    nome: "Carlos"
    idade: 45
    idEndereco: 2    
  }) {
    httpStatusCode
    errors
    message
    data {
      id
      nome
      idade
    }
  }
}
```

**Remover Cliente**
```
mutation {
  removerCliente(idCliente: -2) {
    httpStatusCode
  }
}
```

**Listar Enderecos**

```
query {
  enderecos {
    httpStatusCode
    errors
    message
    data {
      pageNumber
      pageSize
      totalSize
      items {
        id
        cep
        logradouro
        numero
        complemento
        bairro
        localidade
        uf
      }
    }
  }
}
```

**Buscar Endereco por id**

```
query {
  endereco(id: -1) {
    httpStatusCode
    errors
    message
    data {
      id
      cep
      logradouro
      complemento
      bairro
      localidade
      uf
    }
  }
}
```

**Inserir Endereço**

```
mutation {
  inserirEndereco(endereco: {
    cep: "06329000"
    numero: 25
    complemento: "casa 3"
  }) {
    httpStatusCode
    errors
    message
    data {
      id
      cep
      logradouro
      numero
      complemento
      bairro
      localidade
      uf
    }
  }
}
```

**Atualizar Endereço**

```
mutation {
  atualizarEndereco(endereco: {
    id: -2
    numero: 26
    complemento: "casa 4"
  }) {
    httpStatusCode
    errors
    message
    data {
      id
      cep
      logradouro
      numero
      complemento
      bairro
      localidade
      uf
    }
  }
}
```


**Remover Endereço**

```
mutation {
  removerEndereco(idEndereco: -2) {
    httpStatusCode
  }
}
```

### Tecnologias

* Node js
* NPM
* Apollo Server
* Apollo Datasource Rest
* DataLoader

