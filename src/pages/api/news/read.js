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
  res.status(200).json(
    user.map((u) => {
      u.id, u.name, u.password;
    })
  );
}
