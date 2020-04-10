const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      const original = snapshot.val();

      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();

      return snapshot.ref.parent.child('uppercase').set(uppercase);
    })

exports.addMessage = functions.https.onCall((data, context) => {
    if (!context.auth)
        throw new functions.https.HttpsError('failed-precondition', 'The function must be called while authenticated.')

    const text = data.text;
    
    const uid = context.auth.uid;
    const name = context.auth.token.name || null;
    const picture = context.auth.token.picture || null;
    const email = context.auth.token.email || null;

    return admin.database().ref('/messages').push({
            text,
            author: {
                uid,
                name,
                picture,
                email
            }
        })
        .then(() => {
            console.log(`${uid || name}: ${text}`)
            return { text }
        })
})