# Configuration EmailJS pour votre Portfolio

## Étape 1 : Créer un compte EmailJS

1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Vérifiez votre email

## Étape 2 : Créer un Service d'Email

1. Connectez-vous à votre dashboard EmailJS
2. Allez dans "Email Services"
3. Cliquez sur "Add New Service"
4. Choisissez votre provider email (Gmail, Outlook, etc.)
5. Connectez votre compte email
6. Donnez un nom à votre service (ex: "portfolio_service")

## Étape 3 : Créer un Template d'Email

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez le template :

**Template ID :** sera généré automatiquement

**Contenu du template :**
```
From: {{name}} <{{email}}>
To: modestedan771@gmail.com
Subject: {{subject}}

Message de votre portfolio DNK :

Nom : {{name}}
Email : {{email}}
Sujet : {{subject}}

Message :
{{message}}

---
Envoyé depuis : {{from_page}}
```

## Étape 4 : Obtenir vos Clés

1. Allez dans "Account" > "API Keys"
2. Notez votre **Public Key**
3. Gardez-la sécurisée (ne jamais la partager publiquement)

## Étape 5 : Intégrer dans votre code

Une fois que vous avez :
- Service ID
- Template ID  
- Public Key

Contactez-moi et je mettrai à jour votre fichier ContactForm.tsx avec ces valeurs.

## Sécurité

- Ne jamais exposer votre Private Key
- Utilisez toujours la Public Key
- Le formulaire sera sécurisé côté client

## Test

Après configuration, testez avec :
- Différents emails
- Messages courts/longs
- Caractères spéciaux

## Support

EmailJS offre :
- 200 emails/mois gratuit
- Support par email
- Documentation complète
