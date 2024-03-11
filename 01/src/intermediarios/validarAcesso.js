const validarAcesso = (req, res, next) => {
    const { senha } = req.query;
  
    if (!senha || senha !== "cubos123") {
      return res
        .status(401)
        .json({ mensagem: "É necessário informar uma senha válida!" });
    }
    next();
  };
  
  module.exports = {
    validarAcesso,
  };
  