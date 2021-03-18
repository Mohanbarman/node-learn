import { Request, Response } from 'express';
import { demoMembers } from '../demoContent';


export function MembersRoute(req: Request, res: Response) {
    const id = req.params.id;
    const member = demoMembers.find(member => member.id == id);
    // If member not found
    if (!member) {
        res.statusCode = 404;
        res.end();
    }
    res.send(member);
}