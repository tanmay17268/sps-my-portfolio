package com.google.sps.data;

public final class Comment {
    private final long id;
    private final String text;
    private final String email;
    private final long timestamp;

    public Comment(long id, String text, String email, long timestamp) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.timestamp = timestamp;
  }
}