package io.metamorphic.forms.repositories;

import io.metamorphic.forms.models.FormSchema;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * @author Mark Moloney <markmo @ metamorphic.io>
 * Copyright 2015
 */
@RepositoryRestResource(collectionResourceRel = "form-schemas", path = "form-schemas")
public interface FormSchemaRepository extends PagingAndSortingRepository<FormSchema, Integer> {

    List<FormSchema> findByName(@Param("name") String name);
}
