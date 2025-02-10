const usernameValidation = (username) => {
  const regex = /^[a-zA-Zd_]{4,8}/;
  return regex.test(username);
};
const passwordValidation = (password) => {
  const regex = /^[a-zA-Z\d_^]{4,8}/;
  return regex.test(password);
};

const formValidation = (username, password) => {
  const usernameResult = usernameValidation(username);
  const passwordResult = passwordValidation(password);
  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    return alert("username not found");
  } else if (!passwordResult) {
    return alert("password not found");
  }
};


export default formValidation;