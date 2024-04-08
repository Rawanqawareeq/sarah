export const asyncHandler = (fun)=>{
 return (req,res,next)=>{
    fun(req,res,next).catch(error=>{

      return res.json({massage:"error",error:error.stack})
    })
 }
}