package com.example.controller;

import com.example.service.WeatherService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService service) {
        this.weatherService = service;
    }

    @GetMapping
    public ResponseEntity<?> getWeather(@RequestParam(name = "city") String city) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>(weatherService.getWeatherByCity(city), headers, HttpStatus.OK);
    }

}
