CREATE DATABASE EcoConduite;
USE EcoConduite;



CREATE TABLE Examen (
    codeExamen INT NOT NULL AUTO_INCREMENT,
    DateExamen DATE NOT NULL,
    PRIMARY KEY (codeExamen)
);

CREATE TABLE TypePermis (
    codeTypePermis INT NOT NULL AUTO_INCREMENT,
    nomTypePermis VARCHAR(10) NOT NULL,
    PRIMARY KEY (codeTypePermis)
);

CREATE TABLE Utilisateur (
    idUser INT NOT NULL AUTO_INCREMENT,
    email VARCHAR (250) NOT NULL,
    motPasse VARCHAR (400) NOT NULL,
    roleUser VARCHAR (50) NOT NULL,
    nom VARCHAR(50),
    prenom VARCHAR(150),
    dateNais DATE,
    PRIMARY KEY (idUser)
);

CREATE TABLE Module (
    numModule INT NOT NULL AUTO_INCREMENT,
    nomModule VARCHAR(100) NOT NULL,
    ndrSeanceMod INT NOT NULL,
    PRIMARY KEY (numModule)
);

CREATE TABLE Seance (
    idSeance INT NOT NULL AUTO_INCREMENT,
    dateSeance DATE NOT NULL,
    heureDebut TIME NOT NULL,
    heureFin TIME NOT NULL,
    numModule INT NOT NULL,
    codeTypePermis INT NOT NULL,
    codeExamen INT,
    PRIMARY KEY (idSeance),
    FOREIGN KEY (numModule) REFERENCES Module (numModule),
    FOREIGN KEY (codeTypePermis) REFERENCES TypePermis (codeTypePermis),
    FOREIGN KEY (codeExamen) REFERENCES Examen (codeExamen)
);


CREATE TABLE Dossier (
    numDossier INT NOT NULL AUTO_INCREMENT,
    dateInsc DATE NOT NULL,
    resultat VARCHAR(200),
    montantDefini INT NOT NULL,
    nbrSeance INT NOT NULL,
    codeTypePermis INT NOT NULL,
    idUser INT NOT NULL,
    codeExamen INT,
    numModule INT NOT NULL,
    PRIMARY KEY (numDossier),
    FOREIGN KEY (codeTypePermis) REFERENCES TypePermis (codeTypePermis),
    FOREIGN KEY (idUser) REFERENCES Utilisateur (idUser),
    FOREIGN KEY (codeExamen) REFERENCES Examen (codeExamen),
    FOREIGN KEY (numModule) REFERENCES Module (numModule)
);

CREATE TABLE Paiement (
    idTranche INT NOT NULL,
    numDossier INT NOT NULL,
    montant INT NOT NULL,
    dateEcheance DATE NOT NULL,
    dateReglement DATE NOT NULL,
    PRIMARY KEY (numDossier, idTranche),
    FOREIGN KEY (numDossier) REFERENCES Dossier (numDossier)
);



CREATE TABLE Participe (
    idSeance INT NOT NULL,
    numDossier INT NOT NULL,
    presence BOOLEAN NOT NULL,
    motif VARCHAR (250) NOT NULL,
    PRIMARY KEY (idSeance, numDossier),
    FOREIGN KEY (idSeance) REFERENCES Seance (idSeance),
    FOREIGN KEY (numDossier) REFERENCES Dossier (numDossier)
);

insert INTO Utilisateur (email, motPasse, roleUser, nom, prenom, dateNais) VALUES 
    ('gio@gmail.com', '$2b$10$RqWNv3KQLSUX4HAo5t7O.eW7OBhS9ZN1UPY2dnaKChsaLLXbDp35a', 'client','ATCHAOUE', 'Giovanni', '2000-05-18'),
    ('cyr@gmail.com', '$2b$10$RqWNv3KQLSUX4HAo5t7O.eW7OBhS9ZN1UPY2dnaKChsaLLXbDp35a', 'client', 'ADANKON', 'Cyr-Freddy', '2000-01-20'),
    ('admin@gmail.com', '$2b$10$RqWNv3KQLSUX4HAo5t7O.eW7OBhS9ZN1UPY2dnaKChsaLLXbDp35a', 'admmin', NULL, NULL, NULL),
    ('employee@gmail.com', '$2b$10$RqWNv3KQLSUX4HAo5t7O.eW7OBhS9ZN1UPY2dnaKChsaLLXbDp35a', 'employee', NULL, NULL, NULL);

insert INTO Module (nomModule, nbrSeanceMod) VALUES 
    ('normale', 30),
    ('accéléré', 15);

insert INTO TypePermis (nomTypePermis) VALUES 
    ('A'),
    ('B'),
    ('C');
