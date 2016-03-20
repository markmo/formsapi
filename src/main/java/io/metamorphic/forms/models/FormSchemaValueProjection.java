package io.metamorphic.forms.models;

import org.springframework.data.rest.core.config.Projection;

/**
 * @author Mark Moloney <markmo @ metamorphic.io>
 * Copyright 2015
 */
@Projection(name = "schema", types = FormSchema.class)
public interface FormSchemaValueProjection {

    String getSchema();
}
