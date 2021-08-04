USE Escola

GO

-- Seleciona TiposEquipamentos
SELECT TipoEquip FROM TipoEquipamentos

-- Seleciona Salas
SELECT Andar, Nome, MetragemSala FROM Salas

-- Seleciona Usuarios
SELECT Email, Senha FROM Usuarios

-- Seleciona Equipamentos, Utilizando INNER JOIN puxando tabela do Salas, TipoEquipamentos
SELECT Marca, NumeroSerie, Descricao, NumeroPatrimonio, StatusEquipa, TipoEquipamentos.TipoEquip, Salas.Andar, Salas.MetragemSala, Salas.Nome FROM Equipamentos
INNER JOIN TipoEquipamentos ON Equipamentos.IdTipoEquip = TipoEquipamentos.IdTipoEquip
INNER JOIN Salas on Equipamentos.IdSala = Salas.IdSala 