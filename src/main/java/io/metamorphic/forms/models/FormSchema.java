package io.metamorphic.forms.models;

import javax.persistence.*;

/**
 * Created by markmo on 28/03/2015.
 */
@Entity
@Table(name="form_schemas")
public class FormSchema extends AuditedModel {

    @Id
    @SequenceGenerator(name = "form_schema_id_seq", sequenceName = "form_schemas_form_schema_id_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "form_schema_id_seq")
    @Column(name="form_schema_id")
    private Integer id;

    @Column(name="form_schema_name")
    private String name;

    private String description;

    @Column(name="json_schema")
    @Lob
    private String schema;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSchema() {
        return schema;
    }

    public void setSchema(String schema) {
        this.schema = schema;
    }
}
