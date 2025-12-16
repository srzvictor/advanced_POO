
abstract class Notification {
    abstract send(message: string): void;
}

class EmailNotification extends Notification {
    send(message: string): void {
        console.log(`Envoyer un email : ${message}`);
    }
}

class SMSNotification extends Notification {
    send(message: string): void {
        console.log(`Envoyer un SMS : ${message}`);
    }
}

class NotificationFactory {
    static createNotification(type: string): Notification {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            default:
                throw new Error("Type de notification non reconnu.");
        }
    }
}

export { NotificationFactory, Notification, EmailNotification, SMSNotification };
