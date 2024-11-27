import Service from "../models/ServiceModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllServices = async (req, res) => {

    const services = await Service.find();

    res.status(StatusCodes.OK).json({ services });
};

export const createService = async (req, res) => {
    if (req.file) {
        req.body.featuredImage = req.file.path;
    }    
    const service = await Service.create(req.body);
    res.status(StatusCodes.CREATED).json({ service });
};

export const getSingleService = async (req, res) => {
    const service = await Service.findOne({
        _id: req.params.id
    });
    if (!service) throw new NotFoundError("Service not found!");
    res.status(StatusCodes.OK).json(service);
};

export const updateService = async (req, res) => {
    if (req.file) {
        req.body.featuredImage = req.file.path;
    }
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({
        message: "Updated successfully",
        service: updatedService,
    });
};

export const deleteService = async (req, res) => {
    const removedService = await Service.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({
        message: "Deleted successfully",
        service: removedService,
    });
};