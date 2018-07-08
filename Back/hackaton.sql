CREATE TABLE condicions (
	id SERIAL NOT NULL,
	nombre character varying(100),
	PRIMARY KEY (id)
);



CREATE TABLE empresas (
    id SERIAL NOT NULL,
    nombre character varying(100),
   PRIMARY KEY (id)
);



CREATE TABLE productos (
    id  SERIAL NOT NULL,
    nombre character varying(100),
    PRIMARY KEY (id)
);

CREATE TABLE public.precios_productos (
    id  SERIAL NOT NULL,
    monto INT NOT NULL,
    producto_id INT NOT NULL,
    empresa_id INT NOT NULL,
    url text,
    PRIMARY KEY (id),
   FOREIGN KEY (producto_id) REFERENCES productos (id),
   FOREIGN KEY (empresa_id) REFERENCES empresas (id)
);

CREATE TABLE public.condiciones_productos (
    id  SERIAL NOT NULL,
    producto_id INT NOT NULL,
    condicion_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES productos (id),
   FOREIGN KEY (condicion_id) REFERENCES condicions (id)
);
