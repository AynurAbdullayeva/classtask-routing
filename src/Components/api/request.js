import { BASE_URL } from "./base_url";
import axios from "axios";

export const getAllDatas=async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/?page=2`)
    .then(res=>{
        globalData=res.data;
    })
    return globalData;
}