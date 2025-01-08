# Firebase Database Access Before Initialization

This repository demonstrates a common but often subtle bug in Firebase applications: attempting to access the Firestore database before the Firebase app has fully initialized.  This typically leads to silent failures, making debugging difficult.

The `bug.js` file shows the incorrect code that causes the issue. The `bugSolution.js` file provides the corrected implementation. 