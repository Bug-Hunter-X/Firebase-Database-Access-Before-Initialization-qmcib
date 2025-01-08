To fix this, ensure that all database operations are performed within a `.then()` block after the `initializeApp` promise resolves:

```javascript
// Correct: Accessing the database after initialization completes
firebase.initializeApp(firebaseConfig).then(() => {
  const db = firebase.firestore();
  db.collection('users').add({name: 'John Doe'}).then(() => {
    console.log('User added successfully!');
  }).catch((error) => {
    console.error('Error adding user:', error);
  });
});
```

By using promises, you guarantee that the database is accessed only after Firebase is ready.  Always handle potential errors using `.catch()` for robust error handling.