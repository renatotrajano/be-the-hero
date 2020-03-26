const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma infomração no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * Tipos de paramêtros:
 * 
 * Query: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Router Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */



app.listen(3333);