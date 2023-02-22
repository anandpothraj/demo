import {commonrequest} from "./ApiCall.js"
import {BASE_URL} from "./Helper.js"

export const registerfunc = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/api/contact/sendMessage`,data,header);
}