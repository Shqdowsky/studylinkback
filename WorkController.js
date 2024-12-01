import WorkService from "./Services/WorkService.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'documents/'); // Папка для сохранения файлов
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});
const upload = multer({ storage });

class WorkController {
    async create(req, res){
        try {
            console.log(req.body); // Выведет текстовые данные
            console.log(req.files); // Выведет файлы
            const { title, body, predmet } = req.body;
            let files = [];
            if (!req.files) {
                return res.status(400).json({ message: 'No files uploaded' });
            } else{
                files = req.files.map(file => file.originalname);
            }
            const workData = {
                title,
                body,
                predmet,
                document: files
            };

            const work = await WorkService.create(workData);
            return res.json(work);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    async getAll(req, res){
        try{
            const works = await WorkService.getAll();
            return res.json(works);
        } catch(e){
            res.status(500).json(e.message);
        }
    }

    async getOne(req, res){
        try{
            const work = await WorkService.getOne(req.params.id);
            return res.json(work);
        } catch(e){
            res.status(500).json(e.message);
        }
    }
}

export default new WorkController();