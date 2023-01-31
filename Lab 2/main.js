var detailedUsers = [
    {
        firstName: 'Ahmed',
        lastName: 'Ali',
        dateOfBirth: '1995-10-10',
        address: 'Alexadria, Egypt'
    },
    {
        firstName: 'Hossam',
        lastName: 'Mohamed',
        dateOfBirth: '1980-05-10',
        address: 'Nasr City, Cairo, Egypt'
    },
    {
        firstName: 'John',
        lastName: 'James',
        dateOfBirth: '1975-03-05',
        address: 'Nasr street, Nasr City, Cairo, Egypt'
    },
    {
        firstName: 'Tarek',
        lastName: 'Hassan',
        dateOfBirth: '1999-12-03',
        address: '15, street name, district, city, country'
    },
    {
        firstName: 'Hussein',
        lastName: 'Youssuf',
        dateOfBirth: '2005-12-03',
        address: 'abc, street name, district, city, country'
    }
];

function formattedObj(arrofObj) {
    var temp = [];
    for (let i = 0; i < arrofObj.length; i++) {
        fullName = arrofObj[i].firstName + " " + arrofObj[i].lastName;

        var dob = new Date(arrofObj[i].dateOfBirth);
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        age = Math.abs(year - 1970);

        var addressmod = arrofObj[i].address.split(',');

        key = addressmod.length;
        switch (key) {
            case 2:
                temp[i] = {
                    fullName: fullName,
                    age: age,
                    city: addressmod[0],
                    country: addressmod[1]
                };
                break;
            case 3:
                temp[i] = {
                    fullName: fullName,
                    age: age,
                    district: addressmod[0],
                    city: addressmod[1],
                    country: addressmod[2]
                };
                break;
            case 4:
                temp[i] = {
                    fullName: fullName,
                    age: age,
                    street: addressmod[0],
                    district: addressmod[1],
                    city: addressmod[2],
                    country: addressmod[3]
                };
                break;
            case 5:
                buildingNum = addressmod[0];
                if (isNaN(buildingNum)) {
                    temp[i] = {
                        fullName: fullName,
                        age: age,
                        street: addressmod[1],
                        district: addressmod[2],
                        city: addressmod[3],
                        country: addressmod[4]
                    }
                }
                else {
                    temp[i] = {
                        fullName: fullName,
                        age: age,
                        buildingNum: addressmod[0],
                        street: addressmod[1],
                        district: addressmod[2],
                        city: addressmod[3],
                        country: addressmod[4]
                    }
                };
                break;
            default:
                break;
        }
    }
    return temp;
}
var users = formattedObj(detailedUsers);

var arrtemp = [];
var j = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].age < 40) {

        arrtemp[j] = users[i].age;
        j++;
    }
}

function reducerFunc(accumulator, currentvalue) {
    accumulator = accumulator + currentvalue;
    return accumulator;
}

var average = arrtemp.reduce(reducerFunc, 0) / arrtemp.length;
console.log(average);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
const input = 'abbflmffchocC19 ieqvh';

function countString(str) {

    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i > j) {
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > 0)

            console.log(`${str[i]} occurs ${count} times`);
    }
}

countString(input);