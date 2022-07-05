export const getUserDetail = () => {
  let user = {
    name: "",
    userId: "",
    email: "",
  };
  user.userId = localStorage.getItem("userId");
  user.name = localStorage.getItem("name");
  user.email = localStorage.getItem("email");
  return user;
};
