const checkAuth = (req,res,next) => {
  console.log('desde checkAuth');
  next();
}

export default checkAuth;