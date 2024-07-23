const fs = require('fs');

const countStudents = (datapath) => {try {
        const data = fs.readFileSync(datapath, 'utf-8');
        const rows = data.split('\r\n');
        const cs = [];
        const swe = [];
        rows.slice(1).forEach((row) => {
            const column = row.split(',');
            if (column[3] === 'CS') {
                cs.push(column[0]);
            } else {
                swe.push(column[0]);
            }
        });
        console.log(`Number of students: ${rows.slice(1).length}`);
        console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
        console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    } catch (err) {
        console.log(err);
        throw new Error("Cannot load the database");
    }}

module.exports = countStudents;