const fs = require('fs');

// JSON faylını oxu
const rawData = fs.readFileSync('data.json');
const data = JSON.parse(rawData);

// İşçilərin maaşlarını almaq üçün bir funksiya
function getSalaries() {
    const salaries = data.employees.map(employee => employee.salary);
    return salaries;
}

// Ortalama maaşı hesablamaq üçün bir funksiya
function calculateAverageSalary() {
    const salaries = getSalaries();
    const total = salaries.reduce((acc, curr) => acc + curr, 0);
    const average = total / salaries.length;
    return average;
}

// Ən çox maaş alan işçinin məlumatlarını tapmaq üçün bir funksiya
function getHighestPaidEmployee() {
    const highestPaid = data.employees.reduce((prev, current) => (prev.salary > current.salary) ? prev : current);
    return highestPaid;
}

// Maaşların medianını hesablamaq üçün bir funksiya
function calculateSalaryMedian() {
    const salaries = getSalaries().sort((a, b) => a - b);
    const length = salaries.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (salaries[mid - 1] + salaries[mid]) / 2;
    } else {
        return salaries[mid];
    }
}

// Yaşların modunu hesablamaq üçün bir funksiya
function calculateAgeMode() {
    const ages = data.employees.map(employee => employee.age);
    const counts = {};
    let mode = null;
    let maxCount = 0;

    ages.forEach(age => {
        counts[age] = (counts[age] || 0) + 1;
        if (counts[age] > maxCount) {
            maxCount = counts[age];
            mode = age;
        }
    });

    return mode;
}

// Ortalama maaşı konsola çap et
console.log('Ortalama maaş:', calculateAverageSalary());

// Ən çox maaş alan işçinin məlumatlarını konsola çap et
console.log('Ən çox maaş alan işçi:', getHighestPaidEmployee());

// Maaşların medianını konsola çap et
console.log('Maaşların medianı:', calculateSalaryMedian());

// Yaşların modunu konsola çap et
console.log('Yaşların modu:', calculateAgeMode());
