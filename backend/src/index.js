const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

/**
 * para aceitar requisições POST no formato JSON
 */
app.use(cors());  //setar cors(origin: 'http://meuapp.com') pra informar o endereço que pode acessar a aplicação quando ela está em produção
app.use(express.json());

app.use(routes);

/**
 * Rota /
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Apagar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
   * Route params> parametros utilizados para identificar recursos
   *    Acessa através do request.params
   * Request body: É o corpo da requisiçao, utilizado para criar ou acessar recursos.
   *  (todos os dados que vem através da nossa requisição ficam no "request")
   *    Acessa através do request.query
   */


app.listen(3333);
