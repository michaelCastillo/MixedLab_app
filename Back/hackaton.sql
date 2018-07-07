--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.9
-- Dumped by pg_dump version 9.6.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: condicion; Type: TABLE; Schema: public; Owner: nacho
--

CREATE TABLE public.condicion (
    id integer NOT NULL,
    nombre character varying(100),
    usuario integer
);


ALTER TABLE public.condicion OWNER TO nacho;

--
-- Name: empresa; Type: TABLE; Schema: public; Owner: nacho
--

CREATE TABLE public.empresa (
    id integer NOT NULL,
    nombre character varying(100),
    direccion character varying(100)
);


ALTER TABLE public.empresa OWNER TO nacho;

--
-- Name: precio; Type: TABLE; Schema: public; Owner: nacho
--

CREATE TABLE public.precio (
    id integer NOT NULL,
    monto integer,
    producto integer
);


ALTER TABLE public.precio OWNER TO nacho;

--
-- Name: producto; Type: TABLE; Schema: public; Owner: nacho
--

CREATE TABLE public.producto (
    id integer NOT NULL,
    nombre character varying(100),
    empresa integer,
    condicion integer
);


ALTER TABLE public.producto OWNER TO nacho;

--
-- Name: usuario; Type: TABLE; Schema: public; Owner: nacho
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    nombre character varying(100),
    password character varying(100),
    email character varying(100)
);


ALTER TABLE public.usuario OWNER TO nacho;

--
-- Data for Name: condicion; Type: TABLE DATA; Schema: public; Owner: nacho
--

COPY public.condicion (id, nombre, usuario) FROM stdin;
\.


--
-- Data for Name: empresa; Type: TABLE DATA; Schema: public; Owner: nacho
--

COPY public.empresa (id, nombre, direccion) FROM stdin;
\.


--
-- Data for Name: precio; Type: TABLE DATA; Schema: public; Owner: nacho
--

COPY public.precio (id, monto, producto) FROM stdin;
\.


--
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: nacho
--

COPY public.producto (id, nombre, empresa, condicion) FROM stdin;
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: nacho
--

COPY public.usuario (id, nombre, password, email) FROM stdin;
\.


--
-- Name: condicion condicion_pkey; Type: CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.condicion
    ADD CONSTRAINT condicion_pkey PRIMARY KEY (id);


--
-- Name: empresa empresa_pkey; Type: CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pkey PRIMARY KEY (id);


--
-- Name: precio precio_pkey; Type: CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.precio
    ADD CONSTRAINT precio_pkey PRIMARY KEY (id);


--
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- Name: condicion condicion_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.condicion
    ADD CONSTRAINT condicion_usuario_fkey FOREIGN KEY (usuario) REFERENCES public.usuario(id);


--
-- Name: precio precio_producto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.precio
    ADD CONSTRAINT precio_producto_fkey FOREIGN KEY (producto) REFERENCES public.producto(id);


--
-- Name: producto producto_condicion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_condicion_fkey FOREIGN KEY (condicion) REFERENCES public.condicion(id);


--
-- Name: producto producto_empresa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nacho
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_empresa_fkey FOREIGN KEY (empresa) REFERENCES public.empresa(id);


--
-- PostgreSQL database dump complete
--

