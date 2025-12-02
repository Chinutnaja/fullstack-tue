const registrationDate = new Date(`2023-09-15T14:00:00Z`)

const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};
const formatteDate = registrationDate.toLocaleDateString('th-TH',option);
console.log('วันที่สมัคร:' , formatteDate)