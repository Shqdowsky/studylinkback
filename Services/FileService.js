import * as uuid from 'uuid'
import path from "path"

class FileService {
    saveFile(file){
        try{
            async function create(workData) {
                const work = new WorkModel(workData);
                await work.save();
                return work;
            }
        } catch(e){
            console.log(e)
        }
    }
}

export default new FileService