insert into condicions(nombre) values
('Diabetes'),
('Hipertensión'),
('Vegetariano'),
('Insuficiencia renal');


insert into empresas(nombre) values 
('Supermercado Lider'),
('Supermercado Jumbo');

insert into productos(nombre) values 
('Avena Tradicional'),
('Manzana Verde 1 Kg'),
('Malla Papas 2 Kg'),
('Bolsa pechuga deshuesada');


insert into condiciones_productos(producto_id, condicion_id) values 
(1,1),
(1,2),
(1,4),
(2,2),
(1,3),
(2,3),
(3,3),
(3,4),
(4,4),
(2,1),
(4,1);

insert into precios_productos(monto, producto_id, empresa_id, url) values 
(1450,2,1,'https://www.lider.cl/supermercado/product/Granel-Manzana-Verde/829876'),
(740,1,1,'https://www.lider.cl/supermercado/product/Lider-Avena-Tradicional-Caja/6361'),
(1490,2,2,'https://nuevo.jumbo.cl/manzana-verde-granel/p'),
(1790,3,1,'https://www.lider.cl/supermercado/product/Malla-Papas/3821'),
(2290,4,1,'https://www.lider.cl/supermercado/product/Super-Pollo-Pechuga-Deshuesada-de-Pollo-Bolsa/344025');




