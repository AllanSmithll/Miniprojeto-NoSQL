// Pacientes de RUMCA
db.pacientes.insertOne({ cpf:'82691696191', nome: "Allan Amancio", estado_urgencia: 1, telefones: ['83982292523', '83986751649'], data_nascimento: ISODate("2004-11-04"), endereco: { rua: 'Rua Chá de Camomila', bairro: 'Centro', cidade: 'São Miguel de Taipu' }, receitas: [{ medico: ObjectId('64a1eb5eaa28d23aca3cfa3d'), data_realizacao: ISODate("2023-04-30"),data_validade_exame: ISODate("2023-05-30"), remedios: [{nome: 'Dipirona', descricao_uso: 'Dores de cabeça' }, { nome: 'Lentes para miopia', descricao_uso: 'Melhorar visão das proximidades' }, { nome: 'Lacribell', descricao_uso: 'Lubrificantes da córnea' }]}] })