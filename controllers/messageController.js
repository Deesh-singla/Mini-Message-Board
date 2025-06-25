const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];

// Controller logic
const showHome = (req, res) => {
  res.render("index", { title: "Mini Message board", messages });
};

const showForm = (req, res) => {
  res.render("form");
};

const addMessage = (req, res) => {
  const { author, message } = req.body;
  messages.push({ user: author, text: message, added: new Date() });
  res.redirect("/");
};

const showDetails = (req, res) => {
  const author = messages.find(x => x.user === req.params.name);
  res.render("details", { author });
};

export default {
  showHome,
  showForm,
  addMessage,
  showDetails
};
