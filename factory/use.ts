import { NotificationFactory } from './notification.ts';

// Créer une notification par email
const emailNotification = NotificationFactory.createNotification('email');
emailNotification.send("Bienvenue dans nos services !");

// Créer une notification par SMS
const smsNotification = NotificationFactory.createNotification('sms');
smsNotification.send("Votre commande a été expédiée.");

// Essai d'un type de notification non défini
try {
    NotificationFactory.createNotification('push'); // Cela lèvera une erreur
} catch (error) {
    console.error(error.message); // Affiche "Type de notification non reconnu."
}
