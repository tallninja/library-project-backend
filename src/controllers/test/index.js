const allAccess = (req, res) => {
  res.status(200).json({ message: "All access content" });
};

const userAccess = (req, res) => {
  res.status(200).json({ message: "User access content" });
};

const librarianAccess = (req, res) => {
  res.status(200).json({ message: "Librarian access content" });
};

const adminAccess = (req, res) => {
  res.status(200).json({ message: "Admin access content" });
};

module.exports = {
  allAccess,
  userAccess,
  librarianAccess,
  adminAccess,
};
