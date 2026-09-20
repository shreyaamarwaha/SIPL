import "server-only";

import nodemailer from "nodemailer";

type WebsiteAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

type WebsiteEmail = {
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  attachments?: WebsiteAttachment[];
};

export function escapeEmailHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character
  );
}

export async function sendWebsiteEmail(email: WebsiteEmail) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM_EMAIL,
    CONTACT_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    throw new Error("Mail transport is not configured");
  }

  const smtpPort = Number(SMTP_PORT || 587);
  if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    throw new Error("Mail transport is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: smtpPort,
    secure: SMTP_SECURE === "true",
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 15_000,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: SMTP_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.text,
    html: email.html,
    attachments: email.attachments ?? [],
  });
}
