// backend/index.js
import express, {
    urlencoded
} from 'express';
import cors from 'cors';
import pg from 'pg';
import path from 'path';
import {
    fileURLToPath
} from 'url';
import twilio from 'twilio';

import axios from 'axios';

const sendSMS = async (to, message) => {
  try {
    const response = await axios.post(
      'https://www.fast2sms.com/dev/bulkV2',
      {
        route: 'q', // q = transactional, p = promotional
        message,
        language: 'english',
        numbers: to,
      },
      {
        headers: {
          authorization: 'wedfOjYsc720HELXzW1PFnmASDIuqhCUkb6Qo4r3lRvaiG8xKpNkBJfFxRXKpc0oZQrDaUl6jTwC8HS2',
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('SMS sent:', response.data);
  } catch (err) {
    console.error('SMS sending failed:', err.response?.data || err.message);
  }
};

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;
import multer from 'multer';
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({
    extended: true
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});
const upload = multer({
    storage
});

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "hospital_project",
    password: "123456",
    port: 5433,
});
db.connect();
// Example route

app.get('/api/patients/pending', async (req, res) => {
    try {
        const result = await db.query(`SELECT * FROM patients WHERE attended = false ORDER BY patient_id ASC`);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching pending patients:', err);
        res.status(500).json({
            error: 'Database error'
        });
    }
});

app.post('/api/patients', upload.single('img'), async (req, res) => {
    try {
        console.log('Received data:', req.body);
        // Save to DB, validate, etc.

        const patient = req.body;
        const file = req.file;
        const date = new Date();
        const fdate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        const imgPath = file?.filename || null;
        const {
            rows
        } = await db.query(
            `SELECT patient_id FROM patients WHERE patient_id LIKE $1 ORDER BY patient_id DESC LIMIT 1`,
            [`${fdate}_%`]
        );

        let sequence = 1;
        if (rows.length > 0) {
            const lastId = rows[0].patient_id;
            const lastSeq = parseInt(lastId.split('_')[1]);
            sequence = lastSeq + 1;
        }

        const patientId = `${fdate}_${sequence.toString().padStart(3, '0')}`;
        const result = await db.query(`INSERT INTO patients VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`, [patientId, patient.pname, patient.pmail, patient.pmobile, patient.p_age, patient.pgender, patient.pmname, patient.add1, patient.add2, imgPath])
        await sendSMS(patient.pmobile, `Hi ${patient.pname}, your registration is complete and you registered at ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')} on ${date.getDate().toString().padStart(2,'0')}/${(date.getMonth()+1).toString().padStart(2,'0')}/${date.getFullYear()}.`);
        res.status(200).json({
            message: 'Patient created'
        });
    } catch (err) {
        console.log(err);
    }
});

app.post('/api/patient_attend', async (req, res) => {
    try {
        console.log('Received data:', req.body);
        // Save to DB, validate, etc.
        const {
            presc,
            report,
            remarks,
            p_id
        } = req.body;

        const result = await db.query(`INSERT INTO patient_attend (prescription,lab_report,remarks,patient_id) VALUES($1,$2,$3,$4)`, [presc, report, remarks, p_id])
        const result2 = await db.query("UPDATE patients SET attended=true WHERE patient_id=$1", [p_id])
        res.status(200).json({
            message: 'Attendance Recorded'
        });
    } catch (err) {
        console.error('Error in /patient_attend:', err);
        res.status(500).json({
            error: 'Submission failed'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});