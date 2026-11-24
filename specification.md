# Kudos Feature Specification

## Overview

Employees can recognize colleagues by sending kudos messages. Submitted kudos are displayed in a public feed on the dashboard.

## User Story 1: Give Kudos

As an employee, I want to send kudos to a colleague so that I can recognize their contributions.

### Acceptance Criteria

- User can select a colleague.
- User can enter a message.
- User can submit the kudos.
- Submitted kudos appear in the feed.

## User Story 2: View Kudos Feed

As an employee, I want to view recently submitted kudos.

### Acceptance Criteria

- Feed displays recent kudos.
- Feed shows sender, recipient and message.
- New kudos appear immediately.

## User Story 3: Moderate Kudos

As an administrator, I want to hide or delete inappropriate kudos messages so that the feed remains professional.

### Acceptance Criteria

- Administrator can hide a kudos message.
- Administrator can delete a kudos message.
- Hidden messages do not appear in the public feed.

## Database Design

CREATE TABLE kudos (
    id UUID PRIMARY KEY,
    sender_id UUID NOT NULL,
    recipient_id UUID NOT NULL,
    message VARCHAR(250) NOT NULL,
    is_visible BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

## Edge Cases

- Users cannot give kudos to themselves.
- Duplicate submissions should be prevented.
- Spam submissions should be limited.
- Inappropriate content can be moderated by administrators.