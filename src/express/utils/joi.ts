import { NextFunction, Request, Response } from "express";
import * as Joi from "joi";
import * as mongoose from "mongoose";

export const wrapMiddleware = (
  func: (req: Request<any>, res: Response, next?: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    func(req, res, next)
      .then(() => next())
      .catch(next);
  };
};

export const JoiObjectId = Joi.string().hex().length(24);

export const JoiMongoObjectId = JoiObjectId.custom(
  (value) => new mongoose.Types.ObjectId(value)
);

const defaultValidationOptions: Joi.ValidationOptions = {
  abortEarly: false,
  allowUnknown: false,
  convert: true,
};

const normalizeRequest = (req: any, value: any) => {
  req.originalBody = req.body;
  req.body = value.body;

  req.originalQuery = req.query;
  req.query = value.query;

  req.originalParams = req.params;
  req.params = value.params;
};

export const ValidateRequest = (
  schema: Joi.ObjectSchema<any>,
  options: Joi.ValidationOptions = defaultValidationOptions
) => {
  const validator = async (req: Request) => {
    const { error, value } = schema.unknown().validate(req, options);
    if (error) {
      throw error;
    }

    if (options.convert) {
      normalizeRequest(req, value);
    }
  };

  return wrapMiddleware(validator);
};


