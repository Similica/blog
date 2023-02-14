import { router } from "./../main";
import { store } from "./../store/store";
export const login = (email, password) => {
  let users = require("./../assets/users.json");
  let loggedInUser = users.find(
    (user) => user.email == email && user.password == password
  );
  if (loggedInUser) {
    store.commit("setLoggedInUser", loggedInUser);
    router.push({ name: "posts" });
  } else {
    alert("Korisnik sa datim kredencijalima ne postoji");
  }
};
//ovo je sinhrono prvo dobijem podatke pa onda odradjujem, a akcije su za asinhrone stvari kad se asinhrona mutacija izvrsi
export const logout = () => {
  store.commit("clearLoggedInUser");
  router.push({ name: "/" });
};
