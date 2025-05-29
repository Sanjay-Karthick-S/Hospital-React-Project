"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _pg = _interopRequireDefault(require("pg"));

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// backend/index.js
var app = (0, _express["default"])();
var PORT = 5000;
app.use((0, _cors["default"])()); // Enable CORS for frontend requests

app.use(_express["default"].json()); // Parse JSON bodies

app.use(_express["default"].urlencoded({
  extended: true
}));

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: function filename(req, file, cb) {
    var uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
var db = new _pg["default"].Client({
  user: "postgres",
  host: "localhost",
  database: "hospital_project",
  password: "123456",
  port: 5433
});
db.connect(); // Example route

app.post('/api/patients', upload.single('img'), function _callee(req, res) {
  var patient, file, date, fdate, _ref, rows, sequence, lastId, lastSeq, patientId, result;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Received data:', req.body); // Save to DB, validate, etc.

          patient = req.body;
          file = req.file;
          date = new Date();
          fdate = "".concat(date.getFullYear()).concat((date.getMonth() + 1).toString().padStart(2, '0')).concat(date.getDate().toString().padStart(2, '0'));
          _context.next = 8;
          return regeneratorRuntime.awrap(db.query("SELECT patient_id FROM patients WHERE patient_id LIKE $1 ORDER BY patient_id DESC LIMIT 1", ["".concat(fdate, "_%")]));

        case 8:
          _ref = _context.sent;
          rows = _ref.rows;
          sequence = 1;

          if (rows.length > 0) {
            lastId = rows[0].patient_id;
            lastSeq = parseInt(lastId.split('_')[1]);
            sequence = lastSeq + 1;
          }

          patientId = "".concat(fdate, "_").concat(sequence.toString().padStart(3, '0'));
          _context.next = 15;
          return regeneratorRuntime.awrap(db.query("INSERT INTO patients VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [patientId, patient.pname, patient.pmail, patient.pmobile, patient.p_age, patient.pgender, patient.pmname, patient.add1, patient.add2, patient.img]));

        case 15:
          result = _context.sent;
          res.status(200).json({
            message: 'Patient created'
          });
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
});
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});