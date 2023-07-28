import {fail, redirect} from "@sveltejs/kit";
import { loginStatus } from "$lib/store.js";

export const actions={
    login:async(serverLoadEvent)=>{
        const{request,cookies,url,fetch}=serverLoadEvent;
        const data=await request.formData();
        const username=data.get("username");
        const password=data.get("password");

        if(!username||!password){
            return fail(307,{username,message:"Username or password missing"})
        };

        const response=await fetch("http://localhost:4000/users");
        const users=await response.json();

        let searchedUser=users.find(user=>user.username===username);

        if(!searchedUser) return fail(307,{message:"User is not found"});
        if(searchedUser.password!==password)return fail(307,{message:"Invalid password"});
        
        cookies.set("username",username,{path:"/",httpOnly:false});
        loginStatus.login();
        throw redirect(303,`${url.searchParams.get("redirectTo")||"/"}`);
    }
}