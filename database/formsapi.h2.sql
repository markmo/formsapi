CREATE SEQUENCE form_schemas_form_schema_id_seq;

CREATE TABLE form_schemas (
  form_schema_id INTEGER NOT NULL DEFAULT form_schemas_form_schema_id_seq.nextval,
  form_schema_name VARCHAR(100) NOT NULL,
  description VARCHAR,
  json_schema VARCHAR(8000) NOT NULL,
  process_name VARCHAR(100),
  created_ts TIMESTAMP,
  created_by VARCHAR(50),
  modified_ts TIMESTAMP,
  modified_by VARCHAR(50),
  CONSTRAINT form_schemas_pk PRIMARY KEY (form_schema_id)
);

INSERT INTO form_schemas(form_schema_id, form_schema_name, description, json_schema, process_name, created_ts, created_by, modified_ts, modified_by) VALUES (1, 'form-schema', 'Schema for a Form', '{"schema": {"id": "$baseurl/form-schemas/form-schema","$schema": "http://json-schema.org/schema#","name": "Form Schema","description": "Schema for a Form","type": "object","properties": {"name": {"title": "Name","description": "Form name","type": "string"},"description": {"title": "Description","description": "Event Type description","type": "string"},"schema": {"title": "JSON Schema","description": "JSON schema","type": "string"}}},"form": {"schema": {"type": "textarea","rows": 10}}}', null, '2015-04-03 21:22:30.883000', null, '2015-04-03 21:22:30.883000', null);
