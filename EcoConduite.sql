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

CREATE TABLE Client (
    numClient INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(150) NOT NULL,
    email VARCHAR (250),
    dateNais DATE NOT NULL,
    PRIMARY KEY (numClient)
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
    PRIMARY KEY (idSeance),
    FOREIGN KEY (numModule) REFERENCES Module (numModule),
    FOREIGN KEY (codeTypePermis) REFERENCES TypePermis (codeTypePermis)
);


CREATE TABLE Dossier (
    numDossier INT NOT NULL AUTO_INCREMENT,
    dateInsc DATE NOT NULL,
    resultat INT NOT NULL,
    montantDefini INT NOT NULL,
    nbrSeance INT NOT NULL,
    codeTypePermis INT NOT NULL,
    numClient INT NOT NULL,
    codeExamen INT NOT NULL,
    numModule INT NOT NULL,
    PRIMARY KEY (numDossier),
    FOREIGN KEY (codeTypePermis) REFERENCES TypePermis (codeTypePermis),
    FOREIGN KEY (numClient) REFERENCES Client (numClient),
    FOREIGN KEY (codeExamen) REFERENCES Examen (codeExamen),
    FOREIGN KEY (numModule) REFERENCES Module (numModule)
);

CREATE TABLE Paiement (
    idTranche INT NOT NULL AUTO_INCREMENT,
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

insert INTO Client (nom, prenom, dateNais) VALUES 
    ('ATCHAOUE', 'Giovanni', '2000-05-18'),
    ('ADANKON', 'Cyr-Freddy', '2000-01-20');
