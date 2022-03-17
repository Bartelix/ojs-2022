const Mailer = require("./mailer");
const PushNotification = require("./push-notification");
const smsService = require("./sms-service");

function send(message) {
  this.sendMessage(message);
}

const mailSender = send.bind(new Mailer());
const pushSender = send.bind(new PushNotification());
const smsSender = send.bind(smsService);

mailSender("Hello world!");
pushSender("Hello world!");
smsSender("Hello world!");
