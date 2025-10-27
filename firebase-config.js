// Firebase Configuration
// Replace these values with your own Firebase project credentials
// See FIREBASE_SETUP.md for detailed instructions

const firebaseConfig = {
    apiKey: "AIzaSyC-Lv-2b6SogI9tpztcZivPtvDWdOFCg9o",
    authDomain: "padel-19b1a.firebaseapp.com",
    databaseURL: "https://padel-19b1a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "padel-19b1a",
    storageBucket: "padel-19b1a.firebasestorage.app",
    messagingSenderId: "51046388243",
    appId: "1:51046388243:web:9b533bd45bd71c7601a5e6"
};

// Match ID - Change this to create different matches
// All devices with the same matchId will sync together
const MATCH_ID = "match-001";

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig, MATCH_ID };
}
