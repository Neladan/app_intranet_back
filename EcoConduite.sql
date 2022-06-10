CREATE DATABASE EcoConduite;
USE EcoConduite;



CREATE TABLE Examen (
    codeExamen INT NOT NULL,
    DateExamen DATE NOT NULL,
    PRIMARY KEY (codeExamen)
);

CREATE TABLE TypePermis (
    codeTypePermis INT NOT NULL,
    nomTypePermis VARCHAR(10) NOT NULL,
    PRIMARY KEY (codeTypePermis)
);

CREATE TABLE Client (
    numClient INT NOT NULL,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    dateNais DATE NOT NULL,
    PRIMARY KEY (numClient)
);


CREATE TABLE Seance (
    idSeance INT NOT NULL,
    dateSeance DATE NOT NULL,
    heureDebut TIME NOT NULL,
    heureFin TIME NOT NULL,
    PRIMARY KEY (idSeance)
);

CREATE TABLE Tranche (
    idTranche INT NOT NULL,
    PRIMARY KEY (idSeance)
);

CREATE TABLE Module (
    numModule INT NOT NULL,
    nomModule VARCHAR(100) NOT NULL,
    ndrSeanceMod INT NOT NULL,
    PRIMARY KEY (numModule)
);

CREATE TABLE Dossier (
    numDossier INT NOT NULL,
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
    numDossier INT NOT NULL,
    idTranche INT NOT NULL,
    montant INT NOT NULL,
    dateEcheance DATE NOT NULL,
    dateReglement DATE NOT NULL,
    PRIMARY KEY (numDossier, idTranche),
    FOREIGN KEY (numDossier) REFERENCES Dossier (numDossier),
    FOREIGN KEY (idTranche) REFERENCES TRanche (idTranche)
);

CREATE TABLE Absence (
    idSeance INT NOT NULL,
    numDossier INT NOT NULL,
    motif VARCHAR(500) NOT NULL,
    PRIMARY KEY (idSeance, numDossier),
    FOREIGN KEY (idSeance) REFERENCES Seance (idSeance),
    FOREIGN KEY (numDossier) REFERENCES Dossier (numDossier)
);

CREATE TABLE Participe (
    idSeance INT NOT NULL,
    numDossier INT NOT NULL,
    PRIMARY KEY (idSeance, numDossier),
    FOREIGN KEY (idSeance) REFERENCES Seance (idSeance),
    FOREIGN KEY (numDossier) REFERENCES Dossier (numDossier)
);