import multer, { FileFilterCallback } from 'multer';
import path from 'path';

const Filter = {
    modules: {
        one: {
            filter: (req: any, file: Express.Multer.File, cb: FileFilterCallback) => {
                const allowedExtensions = ['.png', '.jpg', '.jpeg'];
                const fileExtension = path.extname(file.originalname).toLowerCase();
                if (allowedExtensions.includes(fileExtension)) {
                    cb(null, true);
                } else {
                    cb(new Error('Invalid file extension'));
                }
            },
            fileSize: 10 * 1024 * 1024,
            storage: multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, './uploads/private/images/');
                },
                filename: function (req, file, cb) {
                    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
                    const fileExtension = path.extname(file.originalname).toLowerCase();

                    if (['.png', '.jpg', '.jpeg'].includes(fileExtension)) {
                        cb(null, `${uniqueSuffix}${fileExtension}`);
                    } else {
                        cb(new Error('Invalid file extension'), '');
                    }
                },

            }),
        }
    },
};


export const ClubImage = multer({
    storage: Filter.modules.one.storage,
    ...Filter.modules.one.filter,
    limits: {
        fileSize: Filter.modules.one.fileSize,
    },
});