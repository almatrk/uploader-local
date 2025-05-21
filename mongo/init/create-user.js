db = db.getSiblingDB('uploader');

db.createUser({
  user: "upl_back",
  pwd: "rcW64fjM472lEgQ",
  roles: [
    { role: "readWrite", db: "uploader" }
  ]
});
