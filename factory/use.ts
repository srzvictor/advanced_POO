import { NotificationFactory } from './notification.ts';

// Créer une notification par email
const emailNotification = NotificationFactory.createNotification('email');
emailNotification.send("Bienvenue dans nos services !");

// Créer une notification par SMS
const smsNotification = NotificationFactory.createNotification('sms');
smsNotification.send("Votre commande a été expédiée.");
