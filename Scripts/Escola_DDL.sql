	CREATE DATABASE Escola

	USE Escola 

	GO

	-- Cria TipoEquipamentos

	CREATE TABLE TipoEquipamentos(
		IdTipoEquip INT PRIMARY KEY IDENTITY,
		TipoEquip VARCHAR(255) UNIQUE NOT NULL
	);

	GO

	-- Cria Salas

	CREATE TABLE Salas(
		IdSala INT PRIMARY KEY IDENTITY,
		Andar INT NOT NULL,
		Nome  VARCHAR(255) NOT NULL,
		MetragemSala FLOAT NOT NULL
	);

	GO

	-- Cria Usuarios

	CREATE TABLE Usuarios(
		idUsuario INT PRIMARY KEY IDENTITY,
		Email VARCHAR(255) NOT NULL UNIQUE,
		Senha VARCHAR (100) NOT NULL
	);

	GO
	
	-- Cria Equipamentos

	CREATE TABLE Equipamentos(
		IdEquipamentos INT PRIMARY KEY IDENTITY NOT NULL,
		IdTipoEquip INT FOREIGN KEY REFERENCES TipoEquipamentos(IdTipoEquip) NOT NULL,
		IdSala INT FOREIGN KEY REFERENCES Salas(IdSala) NOT NULL,
		Marca VARCHAR(100) NOT NULL,
		NumeroSerie INT UNIQUE NOT NULL,
		Descricao VARCHAR(255) NOT NULL,
		NumeroPatrimonio INT UNIQUE NOT NULL,
		StatusEquipa BIT NOT NULL	
	);