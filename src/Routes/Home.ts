import { Request, Response } from "express";
import {demoMembers} from '../demoContent';

export function HomeRoute(req: Request, res: Response) {
    res.send('Homepage')
}