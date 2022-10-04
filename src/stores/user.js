import { defineStore } from "pinia";
import { auth, userCollection } from "../inclouds/firebase";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async Register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      await userCollection.doc(userCred.user.set).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      });

      await userCred.user.updateProfile({
        displayName: values.name,
      });
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password);

      this.userLoggedIn = true;
    },
    async signOut() {
      await auth.signOut();

      this.userLoggedIn = false;
    },
  },
});
