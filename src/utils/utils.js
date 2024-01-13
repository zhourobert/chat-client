import router from "@/router";

export const host='http://localhost:8999/';
export function getImg(fileName){
    return host+'file/download/'+fileName;
}

export function jump(url) {
    router.push(url)
}







