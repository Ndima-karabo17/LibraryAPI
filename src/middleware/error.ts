import { NextFunction, Request, Response } from "express";

export const notFoundHandling = (req:Request, res:Response, next:NextFunction) =>{
    res.status(404).json({error: "NotFound", message:`The requested URL ${req.originalUrl} was not found on this server.`})
}