const loginHandler = () => {
  const cookie = document.cookie;
  const url = location.href;
  if (
    (cookie && url.includes("login")) ||
    (!cookie && url.includes("dashboard"))
  ) {
    location.assign('index.html')
  }
};


export default loginHandler