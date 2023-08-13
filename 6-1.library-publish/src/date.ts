import dayjs from "dayjs";

export function today() {
    return new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
}
export function today2(){
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
}