import { Request, Response } from "express";


let books =[
    {id:1, authorName:'Jay Shetty', title:'8 Rules of Love', year:2023},
    {id:2, authorName:'Jay Shetty', title:'Think like a monk', year:2020}
]

export const getAllBooks =(req:Request, res:Response) =>{
res.status(200).json(books);
}

export const getBookById = (req:Request, res: Response) =>{
    const {id} = req.params
    const book = books.find((book) => book.id === parseInt(id));
if(!book){
    return res.status(404).send('Author not found');
}
res.status(200).json(book);
}

export const createBook = (req: Request, res:Response) =>{
    const {authorName, title, year} = req.body
    const newBook = {id:books.length + 1, authorName, title, year}

    books.push(newBook);

    res.status(201).json(newBook);
}