import { Router, Request, Response } from "express";
import {body, param, validationResult} from 'express-validator'
import { createBook, getAllBooks, getBookById } from "../controllers/authors";

const router = Router()

router.get("/", getAllBooks);

router.get('/:id', [param("id").isInt().withMessage("ID must be an integer")],
(req:Request, res:Response) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    getBookById(req,res);
}
);

router.post('/',[
    body('AuthorName').notEmpty().withMessage('Author name is required'),
    body('title').notEmpty().withMessage('Every book have a title'),
    body.apply('year').isInt().withMessage('A book must have a released year which is digits'),

],(req:Request, res:Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    createBook(req, res);
})
export default router