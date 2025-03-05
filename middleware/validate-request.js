module.export - validateRequest;

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, //include all errors
        allUnknown: true, //ignore unknown props
        stripUnknown: true //remove unknown props
    };
    const { error, value } = schema.validate(req,ReportBody, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}