import { AuthApi } from "@/api";
import api from "@/api";
import { AxiosError } from "axios";
import { error } from "console";
import { redirect } from "next/navigation";

export const loginAction = async (formData: FormData) => {
  const authData = {
    phone: formData.get("phone"),
    password: formData.get("password"),
  };
   try {
    const response =   await AuthApi.post("/auth/login" , authData) 
     if (response.status !== 200) {
     return {
        error : response.data || {error : "Login failed!"}
     }
     }
     const redirectTo = "/" // You can customize this based on your needs
   redirect(redirectTo) 
   } catch (error : any) {
    if(error instanceof AxiosError) {
      return error.response?.data || {error : "Login failed!"}
    } else {
        throw new Error(error.message);
    }
   }
};
