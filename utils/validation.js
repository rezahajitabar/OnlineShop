const validationUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  return regex.test(username);
}

const validationPassword = (password) => {
  const regex = /^.{4,16}$/;
  return regex.test(password);
}

const validationForm = (username, password) => {
  if (!validationUsername(username)) {
      alert("Invalid username");
      return false;
  } 
  
  if (!validationPassword(password)) {
      alert("Invalid password");
      return false;
  }

  return true;
}

export { validationForm };
