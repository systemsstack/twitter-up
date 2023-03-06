package com.gmail.merikbest2015.controller;

import com.gmail.merikbest2015.dto.request.EmailRequest;
import com.gmail.merikbest2015.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;

import static com.gmail.merikbest2015.constants.PathConstants.API_V1_EMAIL;
import static com.gmail.merikbest2015.constants.PathConstants.SUGGESTED;

@RestController
@RequiredArgsConstructor
@RequestMapping(API_V1_EMAIL)
public class EmailController {

    private final EmailService emailService;

    @PostMapping(SUGGESTED)
    public ResponseEntity<Void> sendEmail(@RequestBody EmailRequest emailRequest) throws MessagingException {
        emailService.sendMessageHtml(emailRequest);
        return ResponseEntity.noContent().build();
    }
}
