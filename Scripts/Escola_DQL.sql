	USE Escola 

	GO
	
	-- Inseri Informa��es TiposEquipamentos

	INSERT INTO TipoEquipamentos(TipoEquip) VALUES ('Mobili�rio'), ('Inform�tica'), ('EletroEletr�nico');

	-- Inseri Informa��es Salas

	INSERT INTO Salas(Andar, Nome, MetragemSala) VALUES (5 , 'Sagu�o', 25), (2 , 'Sala Informtica', 12.89);

	-- Inseri Informa��es Usuarios

	INSERT INTO Usuarios(Email, Senha) VALUES ('Joao@email.com', 'joao123');

	-- Inseri Informa��es Equipamentos

	INSERT INTO Equipamentos (IdTipoEquip, IdSala, Marca, NumeroSerie, Descricao, NumeroPatrimonio, StatusEquipa ) VALUES (2, 2, 'Dell', 23, 'Computador de informatica', 1, 1);
	






























