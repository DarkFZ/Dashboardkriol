// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rltrpadqckzskqcfpwsq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdHJwYWRxY2t6c2txY2Zwd3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0OTY4MjMsImV4cCI6MjA0MTA3MjgyM30.NUMc72G6QTdyhstcjgNxGj6uWdUknwNpa7eje4kyd9E';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


// import { createClient } from '@supabase/supabase-js';

// // Configurações da Supabase
// const supabaseUrl = 'https://rltrpadqckzskqcfpwsq.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdHJwYWRxY2t6c2txY2Zwd3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0OTY4MjMsImV4cCI6MjA0MTA3MjgyM30.NUMc72G6QTdyhstcjgNxGj6uWdUknwNpa7eje4kyd9E'; // Use apenas a chave anônima no front-end
// const supabase = createClient(supabaseUrl, supabaseKey);

// // export {supabase};



//==============================================================

// import { createClient } from '@supabase/supabase-js';

// // Configurações do Supabase
// const supabaseUrl = 'https://rltrpadqckzskqcfpwsq.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdHJwYWRxY2t6c2txY2Zwd3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0OTY4MjMsImV4cCI6MjA0MTA3MjgyM30.NUMc72G6QTdyhstcjgNxGj6uWdUknwNpa7eje4kyd9E'; // Use apenas a chave anônima no front-end
// const supabase = createClient(supabaseUrl, supabaseKey);

// async function fetchData() {
//   // Fetch dados de uma tabela
//   const { data, error } = await supabase
//     .from('sensores')  // Substitua 'devices' pelo nome da sua tabela
//     .select('*'); // Ou selecione colunas específicas, como 'column1, column2'
  
//   if (error) {
//     console.error('Erro ao buscar dados:', error.message);
//     return;
//   }
  
//   console.log('Dados recebidos:', data);
//   return data;
// }

// fetchData();

//==============================================================

// import { createClient } from '@supabase/supabase-js';

// // Configurações da Supabase
// const supabaseUrl = 'https://rltrpadqckzskqcfpwsq.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdHJwYWRxY2t6c2txY2Zwd3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0OTY4MjMsImV4cCI6MjA0MTA3MjgyM30.NUMc72G6QTdyhstcjgNxGj6uWdUknwNpa7eje4kyd9E';
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

// // Agora você pode usar o `supabase` em todo o código abaixo
// async function fetchData() {
//   const { data, error } = await supabase
//     .from('sensores') // Substitua 'devices' pelo nome da sua tabela
//     .select('*');
  
//   if (error) {
//     console.error('Erro ao buscar dados:', error.message);
//     return;
//   }
//   else if (data && data.length > 0) {
//         console.log('Dados recebidos1:', data);
//   }
//   else{
//     console.log('Nenhum dado foi encontrado');
//   }

  
// }

// fetchData();

//==============================================================
// const { data, error, status } = await supabase
//   .from('sensores')
//   .select('*');

// console.log('Status da resposta:', status);
// console.log('Erro da consulta:', error);
// console.log('Dados recebidos:', data);

