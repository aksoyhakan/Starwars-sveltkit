import {writable} from "svelte/store";
import Cookies from "js-cookie"
function getLoginStatus(){
    const {subscribe,set}=writable(Cookies.get("username")?true:false);

    return {
        subscribe,
        login:()=>set(true),
        logout:()=>set(false),
    }

}
export const loginStatus=getLoginStatus();

function getCurrentUser(){
    const {subscribe,set}=writable(Cookies.get("username")||"");

    return {
        subscribe,
        writeCurrentUser:(currentUser)=>{
            set(currentUser);
        },
        deleteCurrentUser:()=>{
            set("");
        }
    }
};

export const currentUser=getCurrentUser();