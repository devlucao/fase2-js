# 🚀 Fase 2 — Dia 7 | API REST com Express

Este projeto faz parte da **Fase 2** do plano de estudos em desenvolvimento backend com **Node.js e Express**.

O foco deste dia é a construção de uma **API REST completa**, aplicando boas práticas de arquitetura, separação de responsabilidades e validações claras.

---

## 🎯 Objetivo do Dia

Construir uma API REST que possua:

- Autenticação **fake** via token
- Validações bem separadas (middlewares, controllers e services)
- Arquitetura limpa e organizada
- Regras claras de retorno (HTTP Status Codes)

> ⚠️ **Observação**  
> Não é necessário utilizar JWT real.  
> Um token fake (`"token-123"`) é suficiente para o exercício.

---

## 📁 Estrutura do Projeto (Obrigatória)

```

src/
├─ server.js
├─ routes/
│  ├─ user.routes.js
│  └─ category.routes.js
├─ controllers/
│  ├─ user.controller.js
│  └─ category.controller.js
├─ services/
│  ├─ user.service.js
│  └─ category.service.js
├─ middlewares/
│  ├─ auth.middleware.js
│  └─ validate.middleware.js
└─ data/
├─ users.db.js
└─ categories.db.js

````

Cada camada possui uma responsabilidade clara:
- **Routes** → definição das rotas
- **Middlewares** → validação e autenticação
- **Controllers** → camada HTTP (req / res)
- **Services** → regras de negócio
- **Data** → banco de dados fake (arrays)

---

## ✅ Exercício 1 — `POST /user` (Cadastro)

### 📌 Requisitos
- Criar um novo usuário
- Email deve ser **único**
- Validações obrigatórias

### 📥 Body esperado
```json
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://imagem.com/img.png"
}
````

### 🔎 Validações

* `displayName` com no mínimo **8 caracteres** → **400**
* `email` obrigatório e válido → **400**
* `password` obrigatório e exatamente **6 caracteres** → **400**
* Email já existente → **409**

### ✅ Sucesso

* Status **201**

```json
{ "message": "Cadastro com sucesso" }
```

---

## ✅ Exercício 2 — `POST /login`

### 📥 Body

```json
{
  "email": "email@mail.com",
  "password": "123456"
}
```

### ❌ Erros (400)

* Email ausente ou vazio
* Password ausente ou vazio
* Usuário inexistente

### ✅ Sucesso (200)

```json
{ "token": "token-123" }
```

---

## ✅ Exercício 3 — `GET /user`

### 🔐 Headers obrigatórios

```
Authorization: token-123
```

### ❌ Erros

* Token ausente → **401**
* Token inválido → **401**

### ✅ Sucesso (200)

```json
[
  {
    "id": 1,
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://imagem.com/img.png"
  }
]
```

---

## ✅ Exercício 4 — `GET /user/:id`

### 🔐 Token obrigatório

### ❌ Erros

* Usuário inexistente → **404**
* Token ausente ou inválido → **401**

### ✅ Sucesso (200)

```json
{
  "id": 1,
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "image": "http://imagem.com/img.png"
}
```

---

## ✅ Exercício 5 — `POST /categories`

### 📥 Body

```json
{
  "name": "Inovação"
}
```

### 🔐 Token obrigatório

### ❌ Erros

* Token ausente → **401**
* Token inválido → **401**
* Campo `name` ausente → **400**

### ✅ Sucesso (201)

```json
{ "message": "Criar categoria com sucesso" }
```

---

## 🧠 Conceitos Trabalhados

* Arquitetura em camadas (Routes, Middlewares, Controllers, Services)
* Validações de entrada
* Autenticação fake por token
* Uso correto de HTTP Status Codes
* Boas práticas de organização de API REST

---

## ✅ Observação Final

Este desafio foi estruturado para simular **desafios técnicos reais de backend**, priorizando clareza, organização e responsabilidade de cada camada da aplicação.

