package com.example.expensetracker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173",
                        "https://d1akcaomyl8ojc.cloudfront.net",
                        "https://expense.dhanushbhandarkar.in"
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
    }
}
