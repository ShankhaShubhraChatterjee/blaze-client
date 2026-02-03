import Joi from "joi";

const nameRules = {
	"string.empty": "Name cannot be empty",
};
const usernameRules = {
	"string.empty": "Username cannot be empty",
};
const emailRules = {
	"string.empty": "Email cannot be empty",
};
const passwordRules = {
	"string.empty": "Password cannot be empty",
};

const loginSchema = Joi.object({
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
		.messages(emailRules),

	password: Joi.string().required().messages(passwordRules),
}).required();

const registerSchema = Joi.object({
	name: Joi.string().messages(nameRules),

	username: Joi.string().messages(usernameRules),

	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
		.messages(emailRules),

	password: Joi.string().required().messages(passwordRules),
});

const additionalSchema = Joi.object({});

export { loginSchema, registerSchema };
