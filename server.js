var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbbaicao3la",
});

var con = function () {
  conn.connect(function (err) {
    if (!err) {
      console.log("Connected");
    } else {
      console.log("Error");
    }
  });
};

var closeDB = function () {
  conn.end(function (err) {
    if (!err) {
      console.log("Close DB");
    }
  });
};

//--GET
exports.getAll = function (callBackQuery) {
  con();
  conn.query("SELECT * FROM historyuserwin", function (err, results) {
    if (!err) {
      callBackQuery(results);
    } else {
      console.log(err);
    }
  });
  closeDB();
};

//--POST
exports.post = function (arr) {
  con();
  debugger;
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO historyuserwin (id, userName, users) VALUES ?";
  var values = [
    [3, "Highway", "a,b,c"],
    [4, "Lowstreet", "a,c,b"],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
};
