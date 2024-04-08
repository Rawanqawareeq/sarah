import joi from "joi"

export const signupSchema ={ 
   body :joi.object({
    UserName:joi.string().alphanum().min(3).max(20).required().messages({
      "string.empty":"UserName is required",
    }),
   email:joi.string().email().required(),
   password:joi.string().min(8).max(20).required(),
   cpassword:joi.valid(joi.ref('password')).required(),
   age:joi.number().min(20).positive().integer(),
   gender:joi.string().alphanum().valid('Male','Female').required(),
}),
query:joi.object({
   test:joi.boolean,
})

}
export const signinSchema = {
   body:joi.object({
   email:joi.string().email().required(),
   password:joi.string().min(8).max(20).required(),
})
}