let user = [
  {
    id: 1,
    name: "",
    password: "",
  },
  {
    id: 2,
    name: "",
    password: "",
  },
  {
    id: 3,
    name: "",
    password: "",
  },
];

export default function create(req, res) {
  const newUser = req.body;
  user.push(newUser);
  res.status(200).json(newUser);
}
