const admin = {
  userName: "admin",
  password: "admin",
  email: "admin",
};

const users = [admin];

export const addUser = (user) => {
  users.push(user);
};

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const ifUserLogged = () => {
  const result = JSON.parse(localStorage.getItem("user"));
  return result;
};

export const logout = () => {
  localStorage.removeItem("total");
  localStorage.removeItem("productsCart")
  localStorage.removeItem("user");
};

export const getUsers = () => users;
