import { Request, Response, NextFunction } from "express";
import { appendFile } from 'fs';
import moment from 'moment';
import path from 'path';


export function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
    const time: string = moment().format();
    const url: string = `${req.url}`;
    const host: string = `${req.hostname}`;
    const log = `${time}:${host}:${url}\n`;

    appendFile(path.join(process.cwd(), 'Logs', 'Requests.log'), log, (err => {
        if (err) console.log(err);
    }));

    next();
}