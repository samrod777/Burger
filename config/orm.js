const connection = require("./connection.js");

function toQuestionMarks(num) {
    let questionArray = [];
  
    for (let i = 0; i < num; i++) {
        questionArray.push("?");
    }
    return questionArray.toString();
}

function objToSql(ob) {
    let sqlArray = [];
  
    for (let key in ob) {
      let value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        sqlArray.push(key + "=" + value);
      }
    }
    return sqlArray.toString();
}

const orm = {
    selectAll: function(tableName, cb) {
        const queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, cols, vals, cb) {
        const queryString = "INSERT INTO " + tableName + " (" + cols.toString() + ") VALUES (" + toQuestionMarks(vals.length) + ")";
        
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, objColVals, condition, cb) {
        const queryString = "UPDATE " + tableName + " SET " + objToSql(objColVals) + " WHERE " + condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;