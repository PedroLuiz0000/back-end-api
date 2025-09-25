import express from "express";  
import pkg from "pg";
import dotenv from "dotenv";  
dotenv.config();         // Carrega e processa o arquivo .env
const { Pool } = pkg;    // Utiliza a Classe Pool do Postgres  // Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {        // Cria endpoint na rota da raiz do projeto
  
  console.log("Rota GET / solicitada");
  res.json({
		message: "API para limpar o computador",      // Substitua pelo conteúdo da sua API
    author: "Pedro Luiz Lopes Pereira",    // Substitua pelo seu nome
  statusBD: dbStatus
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço rodando na porta:  ${port}`);
});