package io.metamorphic.forms.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.DefaultErrorAttributes;
import org.springframework.boot.autoconfigure.web.ErrorAttributes;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Created by markmo on 9/06/15.
 */
@Controller
public class MetastoreErrorController implements ErrorController {

    @Value("${error.path:/error}")
    private String errorPath;

    private final ErrorAttributes errorAttributes;

    public MetastoreErrorController() {
        this.errorAttributes = new DefaultErrorAttributes();
    }

    @Override
    public String getErrorPath() {
        return this.errorPath;
    }

    /**
     * Essentially overriding BasicErrorController to forward page refreshes
     * with a client route to the index page for JavaScript to resolve the
     * route instead.
     *
     * @param request
     * @param response
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping(value = "${error.path:/error}", produces = "text/html")
    public ModelAndView errorHtml(HttpServletRequest request, HttpServletResponse response) throws Exception {
        if (getStatus(request) == HttpStatus.NOT_FOUND) {
            request.getRequestDispatcher("/index.html").forward(request, response);
            return null;
        }
        return new ModelAndView("error", getErrorAttributes(request, false));
    }

    @RequestMapping(value = "${error.path:/error}")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> error(HttpServletRequest request) {
        Map<String, Object> body = getErrorAttributes(request, getTraceParameter(request));
        HttpStatus status = getStatus(request);
        return new ResponseEntity<Map<String, Object>>(body, status);
    }

    private boolean getTraceParameter(HttpServletRequest request) {
        String parameter = request.getParameter("trace");
        if (parameter == null) {
            return false;
        }
        return !"false".equals(parameter.toLowerCase());
    }

    private Map<String, Object> getErrorAttributes(HttpServletRequest request,
                                                   boolean includeStackTrace) {
        RequestAttributes requestAttributes = new ServletRequestAttributes(request);
        return this.errorAttributes.getErrorAttributes(requestAttributes,
                includeStackTrace);
    }

    private HttpStatus getStatus(HttpServletRequest request) {
        Integer statusCode = (Integer) request
                .getAttribute("javax.servlet.error.status_code");
        if (statusCode != null) {
            try {
                return HttpStatus.valueOf(statusCode);
            }
            catch (Exception e) {
            }
        }
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
}
