function GetDate() {
    let currentDate;
    const newDate = new Date();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    currentDate = `${getZero(hours)}:${getZero(minutes)} ${getZero(day)}.${getZero(month)}.${year}`
    return currentDate;

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
}

export default GetDate;