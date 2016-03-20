package io.metamorphic.forms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by markmo on 6/07/2015.
 */
@SpringBootApplication
@EnableJpaRepositories(basePackages = "io.metamorphic.forms.repositories")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
