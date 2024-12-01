import Work from "../Work.js";
import FileService from "./FileService.js";

class WorkService {
    async create(work){
        const createdWork = await Work.create(work);
        return createdWork;
    }
    
    async getAll(){
        const works = await Work.find();
        return works
    }

    async getOne(id){
        if(!id){
            throw new Error('id not specified');
        }
        const work = await Work.findById(id);
        return work;
    }
}

export default new WorkService();