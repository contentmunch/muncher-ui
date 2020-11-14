import Api from "../../service/Api";

export const sendMaintenanceMail = (formData: FormData, onUploadProgress?: any) => {

    return Api.post("mail/maintenance", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    })
};

