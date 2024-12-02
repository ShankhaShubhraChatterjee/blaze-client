import Joi from "joi";

const emailRules = {
	'string.empty': "email cannot be empty"
}

const loginSchema = Joi.object({
	email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] }}).messages(emailRules),
	password: Joi.string().required(),
}).required()

export { loginSchema }