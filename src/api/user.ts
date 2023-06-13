import service from "@/utils/auth";

export const login = async (username: string, password: string) => {
    return await service.post(`api/login?username=${username}&password=${password}`, { username, password });
};

export const register= async (username: string, password: string,email:string) => {
    return await service.post(`api/reg?username=${username}&password=${password}&email=${email}`, { username, password,email}); 
};
