exports.allAccess = (req, res) => {
    res.status(200).send("Conteudo publico.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("Conteudo de Tecnico.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Conteudo superadmin.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Conteudo Admin .");
  };