-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Lun 14 Mai 2018 à 20:25
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `maderise`
--

-- --------------------------------------------------------

--
-- Structure de la table `assemble`
--

CREATE TABLE `assemble` (
  `x_co` float DEFAULT NULL,
  `y_co` float DEFAULT NULL,
  `z_co` float DEFAULT NULL,
  `long_mc` float DEFAULT NULL,
  `larg_mc` float DEFAULT NULL,
  `epai_mc` float DEFAULT NULL,
  `id_mo` int(11) NOT NULL,
  `id_co` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_cl` int(11) NOT NULL,
  `nom_cl` varchar(50) DEFAULT NULL,
  `prenom_cl` varchar(50) DEFAULT NULL,
  `tel_cl` varchar(20) DEFAULT NULL,
  `mail_cl` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`id_cl`, `nom_cl`, `prenom_cl`, `tel_cl`, `mail_cl`) VALUES
(1, NULL, NULL, NULL, NULL),
(2, 'aa', 'aa', 'aa', 'aa'),
(3, 'Alphonse', 'Brown', '0505', 'aa'),
(4, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL),
(6, 'aa', 'aa', 'aa', 'aa');

-- --------------------------------------------------------

--
-- Structure de la table `composant`
--

CREATE TABLE `composant` (
  `id_co` int(11) NOT NULL,
  `famille` varchar(50) DEFAULT NULL,
  `ref_co` varchar(50) DEFAULT NULL,
  `long_co` float DEFAULT NULL,
  `larg_co` float DEFAULT NULL,
  `epai_co` float DEFAULT NULL,
  `prix` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `compose`
--

CREATE TABLE `compose` (
  `x_mo` float NOT NULL,
  `y_mo` float NOT NULL,
  `z_mo` float NOT NULL,
  `modele_mo` varchar(30) NOT NULL,
  `id_mo` int(11) NOT NULL,
  `id_pr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `compose`
--

INSERT INTO `compose` (`x_mo`, `y_mo`, `z_mo`, `modele_mo`, `id_mo`, `id_pr`) VALUES
(0, 0, 0, '', 1, 5),
(0, 0, 0, '', 2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `cree`
--

CREATE TABLE `cree` (
  `id_ut` int(11) NOT NULL,
  `id_pr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `devis`
--

CREATE TABLE `devis` (
  `id_de` int(11) NOT NULL,
  `date_crea` date DEFAULT NULL,
  `id_pr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `document`
--

CREATE TABLE `document` (
  `id_do` int(11) NOT NULL,
  `ref_do` varchar(50) DEFAULT NULL,
  `date_crea` date DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `id_pr` int(11) NOT NULL,
  `id_mo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `fournisseur`
--

CREATE TABLE `fournisseur` (
  `id_fo` int(11) NOT NULL,
  `nom_fo` varchar(50) DEFAULT NULL,
  `tel_fo` varchar(20) DEFAULT NULL,
  `mail_fo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `gamme`
--

CREATE TABLE `gamme` (
  `id_ga` int(11) NOT NULL,
  `ref_ga` varchar(50) DEFAULT NULL,
  `formule` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `gamme`
--

INSERT INTO `gamme` (`id_ga`, `ref_ga`, `formule`) VALUES
(1, 'Luxe', '0=1000'),
(2, 'Economique', '1+1=11');

-- --------------------------------------------------------

--
-- Structure de la table `maderises`
--

CREATE TABLE `maderises` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

CREATE TABLE `module` (
  `id_mo` int(11) NOT NULL,
  `nature` varchar(50) NOT NULL,
  `ref_mo` varchar(50) DEFAULT NULL,
  `long_mo` float DEFAULT NULL,
  `larg_mo` float DEFAULT NULL,
  `epai_mo` float DEFAULT NULL,
  `id_ga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `module`
--

INSERT INTO `module` (`id_mo`, `nature`, `ref_mo`, `long_mo`, `larg_mo`, `epai_mo`, `id_ga`) VALUES
(1, 'Mur extérieur', 'ME_01', 5, 2, 0.15, 1),
(2, 'Sol', 'S_01', 2, 2, 0.2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id_fo` int(11) NOT NULL,
  `id_co` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id_pr` int(11) NOT NULL,
  `ref_pr` varchar(50) DEFAULT NULL,
  `etat` varchar(50) DEFAULT NULL,
  `date_crea` date DEFAULT NULL,
  `date_cons` date DEFAULT NULL,
  `date_clot` date DEFAULT NULL,
  `type_pr` varchar(2) NOT NULL,
  `id_cl` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `projet`
--

INSERT INTO `projet` (`id_pr`, `ref_pr`, `etat`, `date_crea`, `date_cons`, `date_clot`, `type_pr`, `id_cl`) VALUES
(1, NULL, 'M', '2018-05-01', '2018-05-12', '2018-05-31', '', NULL),
(2, NULL, 'C', '2017-12-13', '2018-04-25', '2018-05-03', '', NULL),
(3, 'Test', 'P', NULL, NULL, NULL, '', NULL),
(4, 'Test2', 'P', NULL, NULL, NULL, 'C', NULL),
(5, 'Test3', 'P', NULL, NULL, NULL, 'C', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20180430142511-create-maderise.js');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_ut` int(11) NOT NULL,
  `statut` varchar(1) NOT NULL,
  `nom_ut` varchar(50) NOT NULL,
  `prenom_ut` varchar(50) NOT NULL,
  `log` varchar(20) NOT NULL,
  `mdp` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_ut`, `statut`, `nom_ut`, `prenom_ut`, `log`, `mdp`) VALUES
(1, 'A', 'Payet', 'Dimitri', 'dp', 'dp');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `assemble`
--
ALTER TABLE `assemble`
  ADD PRIMARY KEY (`id_mo`,`id_co`),
  ADD KEY `FK_Assemble_id_co` (`id_co`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_cl`);

--
-- Index pour la table `composant`
--
ALTER TABLE `composant`
  ADD PRIMARY KEY (`id_co`);

--
-- Index pour la table `compose`
--
ALTER TABLE `compose`
  ADD PRIMARY KEY (`id_mo`,`id_pr`),
  ADD KEY `FK_Compose_id_pr` (`id_pr`);

--
-- Index pour la table `cree`
--
ALTER TABLE `cree`
  ADD PRIMARY KEY (`id_ut`,`id_pr`),
  ADD KEY `FK_Cree_id_pr` (`id_pr`);

--
-- Index pour la table `devis`
--
ALTER TABLE `devis`
  ADD PRIMARY KEY (`id_de`),
  ADD KEY `FK_Devis_id_pr` (`id_pr`);

--
-- Index pour la table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id_do`),
  ADD KEY `FK_Document_id_pr` (`id_pr`),
  ADD KEY `FK_Document_id_mo` (`id_mo`);

--
-- Index pour la table `fournisseur`
--
ALTER TABLE `fournisseur`
  ADD PRIMARY KEY (`id_fo`);

--
-- Index pour la table `gamme`
--
ALTER TABLE `gamme`
  ADD PRIMARY KEY (`id_ga`);

--
-- Index pour la table `maderises`
--
ALTER TABLE `maderises`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id_mo`),
  ADD KEY `FK_Module_id_ga` (`id_ga`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id_fo`,`id_co`),
  ADD KEY `FK_Produit_id_co` (`id_co`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id_pr`),
  ADD KEY `FK_Projet_id_cl` (`id_cl`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_ut`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_cl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `composant`
--
ALTER TABLE `composant`
  MODIFY `id_co` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `devis`
--
ALTER TABLE `devis`
  MODIFY `id_de` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `document`
--
ALTER TABLE `document`
  MODIFY `id_do` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `fournisseur`
--
ALTER TABLE `fournisseur`
  MODIFY `id_fo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `gamme`
--
ALTER TABLE `gamme`
  MODIFY `id_ga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `maderises`
--
ALTER TABLE `maderises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `module`
--
ALTER TABLE `module`
  MODIFY `id_mo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id_pr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_ut` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `assemble`
--
ALTER TABLE `assemble`
  ADD CONSTRAINT `FK_Assemble_id_co` FOREIGN KEY (`id_co`) REFERENCES `composant` (`id_co`),
  ADD CONSTRAINT `FK_Assemble_id_mo` FOREIGN KEY (`id_mo`) REFERENCES `module` (`id_mo`);

--
-- Contraintes pour la table `compose`
--
ALTER TABLE `compose`
  ADD CONSTRAINT `FK_Compose_id_mo` FOREIGN KEY (`id_mo`) REFERENCES `module` (`id_mo`),
  ADD CONSTRAINT `FK_Compose_id_pr` FOREIGN KEY (`id_pr`) REFERENCES `projet` (`id_pr`);

--
-- Contraintes pour la table `cree`
--
ALTER TABLE `cree`
  ADD CONSTRAINT `FK_Cree_id_pr` FOREIGN KEY (`id_pr`) REFERENCES `projet` (`id_pr`),
  ADD CONSTRAINT `FK_Cree_id_ut` FOREIGN KEY (`id_ut`) REFERENCES `utilisateur` (`id_ut`);

--
-- Contraintes pour la table `devis`
--
ALTER TABLE `devis`
  ADD CONSTRAINT `FK_Devis_id_pr` FOREIGN KEY (`id_pr`) REFERENCES `projet` (`id_pr`);

--
-- Contraintes pour la table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `FK_Document_id_mo` FOREIGN KEY (`id_mo`) REFERENCES `module` (`id_mo`),
  ADD CONSTRAINT `FK_Document_id_pr` FOREIGN KEY (`id_pr`) REFERENCES `projet` (`id_pr`);

--
-- Contraintes pour la table `module`
--
ALTER TABLE `module`
  ADD CONSTRAINT `FK_Module_id_ga` FOREIGN KEY (`id_ga`) REFERENCES `gamme` (`id_ga`);

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `FK_Produit_id_co` FOREIGN KEY (`id_co`) REFERENCES `composant` (`id_co`),
  ADD CONSTRAINT `FK_Produit_id_fo` FOREIGN KEY (`id_fo`) REFERENCES `fournisseur` (`id_fo`);

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `FK_Projet_id_cl` FOREIGN KEY (`id_cl`) REFERENCES `client` (`id_cl`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
