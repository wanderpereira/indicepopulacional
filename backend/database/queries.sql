-- Criando a tabela Indicadores
create table indicadores(
estado varchar(75) not null,
sigla varchar(2) not null,
regiao varchar(25) not null,
populacao numeric(20,3) not null
);

-- Inserindo os dados na tabela
insert into indicadores (estado, sigla, regiao, populacao) values ('São Paulo', 'SP', 'Sudeste', '44.396.484,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Minas Gerais', 'MG', 'Sudeste',	'20.869.101,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Rio de Janeiro', 'RJ','Sudeste', '16.550.024,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Bahia','BA','Nordeste', '15.203.934,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Rio Grande do Sul', 'RS','Sul','11.247.972,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Paraná', 'PR', 'Sul','11.163.018,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Pernambuco','PE','Nordeste', '9.345.173,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Ceará','CE','Nordeste', '8.904.459,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Pará','PA',	'Norte', '8.175.113,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Maranhão','MA','Nordeste', '6.904.241,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Santa Catarina', 'SC', 'Sul', '6.819.190,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Goiás','GO','Centro-Oeste', '6.610.681,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Paraíba','PB','Nordeste', '3.972.202,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Amazonas',	'AM', 'Norte', '3.938.336,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Espírito Santo', 'ES','Sudeste', '3.929.911,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Rio Grande do Norte','RN','Nordeste', '3.442.175,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Alagoas','AL','Nordeste', '3.340.932,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Mato Grosso','MT','Centro-Oeste', '3.270.973,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Piauí','PI','Nordeste', '3.204.028,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Distrito Federal','DF','Centro-Oeste', '2.914.830,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Mato Grosso do Sul','MS','Centro-Oeste', '2.651.235,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Sergipe','SE','Nordeste', '2.242.937,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Rondônia', 'RO', 'Norte', '1.768.204,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Tocantins', 'TO', 'Norte', '1.515.126,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Acre', 'AC', 'Norte', '803.513,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Amapá', 'AP', 'Norte', '766.679,00');
insert into indicadores (estado, sigla, regiao, populacao) values ('Roraima', 'RR', 'Norte', '505.665,00');


-- Criando a View Centro Oeste
create view vw_centro_oeste
as
select ROW_NUMBER() OVER (order by cast(populacao as numeric) desc) as ranking, rowid as id, * from indicadores where regiao = 'Centro-Oeste';

-- Criando a View Sul
create view vw_sul
as
select ROW_NUMBER() OVER (order by cast(populacao as numeric) desc) as ranking, rowid as id, * from indicadores where regiao = 'Sul';

-- Criando a View Sudeste
create view vw_sudeste
as
select ROW_NUMBER() OVER (order by cast(populacao as numeric) desc) as ranking, rowid as id, * from indicadores where regiao = 'Sudeste';

-- Criando a View Nordeste
create view vw_nordeste
as
select ROW_NUMBER() OVER (order by cast(populacao as numeric) desc) as ranking, rowid as id, * from indicadores where regiao = 'Nordeste';

-- Criando a View Norte
create view vw_norte
as
select ROW_NUMBER() OVER (order by cast(populacao as numeric) desc) as ranking, rowid as id, * from indicadores where regiao = 'Norte';

-- Consultando a tabela Indicadores
select rowid, * from indicadores

-- Consultando uma VIEW por Região ex: SP
select estado, ranking, regiao, populacao from vw_sudeste where sigla = 'SP';