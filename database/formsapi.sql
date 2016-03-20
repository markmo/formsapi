CREATE SCHEMA metaform;


CREATE SEQUENCE metaform.form_schemas_form_schema_id_seq;

CREATE TABLE metaform.form_schemas (
  form_schema_id INTEGER NOT NULL DEFAULT nextval('metaform.form_schemas_form_schema_id_seq'),
  form_schema_name VARCHAR(100) NOT NULL,
  description VARCHAR,
  json_schema TEXT NOT NULL,
  process_name VARCHAR(100),
  created_ts TIMESTAMP,
  created_by VARCHAR(50),
  modified_ts TIMESTAMP,
  modified_by VARCHAR(50),
  CONSTRAINT form_schemas_pk PRIMARY KEY (form_schema_id)
);

ALTER SEQUENCE metaform.form_schemas_form_schema_id_seq OWNED BY metaform.form_schemas.form_schema_id;
