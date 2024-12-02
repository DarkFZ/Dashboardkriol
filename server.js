import express from 'express';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Configurar o cliente do Supabase
const supabaseUrl = 'https://rltrpadqckzskqcfpwsq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdHJwYWRxY2t6c2txY2Zwd3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0OTY4MjMsImV4cCI6MjA0MTA3MjgyM30.NUMc72G6QTdyhstcjgNxGj6uWdUknwNpa7eje4kyd9E'; // Insira sua chave aqui
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = 3001;

// Servir os arquivos estáticos (CSS, JS, HTML, etc.)
app.use(express.static(path.join(process.cwd(), 'public')));

// Rota para buscar dados do banco de dados (Supabase)
app.get('/sensores', async (req, res) => {
  try {
    // Buscar dados da tabela 'sensores' no Supabase
    const { data, error } = await supabase
      .from('sensores') // Nome da tabela
      .select('*'); // Seleciona todos os campos

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Retornar os dados obtidos do Supabase
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }

 });
// // Middleware para processar JSON
// app.use(bodyParser.json());

// // Servir arquivos estáticos
// app.use(express.static(path.join(process.cwd(), 'public')));

// // Rota de login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       return res.status(401).json({ error: 'Credenciais inválidas' });
//     }

//     res.json({
//       message: 'Login realizado com sucesso!',
//       user: data.user,
//       token: data.session.access_token,
//     });
//   } catch (err) {
//     console.error('Erro durante o login:', err);
//     res.status(500).json({ error: 'Erro no servidor durante o login' });
//   }
// });


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
