import { Router } from "express";
import WorkController from "./WorkController.js";
import multer from "multer";
const router = new Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './documents/'); // Папка для сохранения файлов
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

router.post('/works', upload.array('document'), WorkController.create);
router.get('/works', WorkController.getAll)
router.get('/works/:id', WorkController.getOne)
router.put('/works')
router.delete('/works/:id')

export default router;