	USE Escola 

	GO
	
	-- Inseri Informações TiposEquipamentos

	INSERT INTO TipoEquipamentos(TipoEquip) VALUES ('Mobiliário'), ('Informática'), ('EletroEletrônico');

	-- Inseri Informações Salas

	INSERT INTO Salas(Andar, Nome, MetragemSala) VALUES (5 , 'Saguão', 25), (2 , 'Sala Informtica', 12.89);

	-- Inseri Informações Usuarios

	INSERT INTO Usuarios(Email, Senha) VALUES ('Joao@email.com', 'joao123');

	-- Inseri Informações Equipamentos

	INSERT INTO Equipamentos (IdTipoEquip, IdSala, Marca, NumeroSerie, Descricao, NumeroPatrimonio, StatusEquipa ) VALUES (2, 2, 'Dell', 23, 'Computador de informatica', 1, 1);
	






























