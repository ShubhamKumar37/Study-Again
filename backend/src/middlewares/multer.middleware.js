import multer from "multer";

const storage = multer.diskStorage({
    destination: function (_, _, cb) {
        cb(null, "./public/temp");
    },
    filename: function (_, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    }
});

export const upload = multer({ storage });