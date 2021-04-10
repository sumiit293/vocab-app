import { axiosRequest } from './../common/helper/helper';

export const fetchWordListApi = async (value) => {
    return await axiosRequest("GET", `/api/word-list`, null);
};

