import { redirect,fail } from "@sveltejs/kit";

export const actions={
    register:async (serverLoadEvent)=>{
        const {fetch,request}=serverLoadEvent;

        const dataForm=await request.formData();
        const username=dataForm.get("username");
        const password=dataForm.get("password");

        if(!username||!password){
            return fail(307,{username,message:"Missing username or password"});
        }
        const usersResponse=await fetch("http://localhost:4000/users");
        const users=await usersResponse.json();
        let body={
            id:users.length+1,
            username,
            password,
            role:"user"
        }
        const newUserResponse=await fetch("http://localhost:4000/users",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(body)
        });
        throw redirect(301,"/login");
    }
}