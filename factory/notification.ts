// Classe Mère : Notification
abstract class Notification {
    abstract send(message: string): void; // Méthode abstraite pour envoyer un message
}

// Sous-classe : EmailNotification
class EmailNotification extends Notification {
    send(message: string): void {
        console.log(`Envoyer un email : ${message}`);
    }
}

// Sous-classe : SMSNotification
class SMSNotification extends Notification {
    send(message: string): void {
        console.log(`Envoyer un SMS : ${message}`);
    }
}

// Factory : NotificationFactory
class NotificationFactory {
    // Méthode de fabrication
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

// Exportation des classes pour les utiliser dans d'autres fichiers
export { NotificationFactory, Notification, EmailNotification, SMSNotification };
