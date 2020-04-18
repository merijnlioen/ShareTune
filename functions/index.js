const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()

// exports.sendNotification = functions.firestore.document('friends/{friendId}')
//     .onCreate((snap, context) => {
//         const value = snap.data()

//         db.collection('users').doc(value.sender).get()
//             .then(user => {
//                 const sender = user.data()

//                 return db.collection('notifications').doc().set({
//                     notification: 'Friend request received',
//                     receiver: value.receiver,
//                     timestamp: value.timestamp,
//                     sender
//                 })
//             })
//     })


exports.sendFriendRequestNotification = functions.firestore.document('friends/{friendId}')
    .onCreate((snap) => {
        const value = snap.data()

        db.collection('users').doc(value.sender).get()
            .then(user => {
                const sender = user.data()

                return db.collection('notifications').doc().set({
                    notification: 'Friend request received',
                    receiver: value.receiver,
                    timestamp: Date.now(),
                    sender
                })
            })
    })

exports.sendFriendAcceptedNotification = functions.firestore.document('friends/{friendId}')
    .onUpdate((change) => {
        const newValue = change.after.data()

        if (newValue.status !== 'friends') return

        db.collection('users').doc(newValue.receiver).get()
            .then(user => {
                const sender = user.data()

                return db.collection('notifications').doc().set({
                    notification: 'Friend request accepted',
                    receiver: newValue.sender,
                    timestamp: Date.now(),
                    sender
                })
            })
    })