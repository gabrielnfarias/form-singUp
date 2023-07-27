import "./cadastro.css";
import React from "react";
import pictureCadastro from "./../../assets/woman-success.png";

function CadastroConcluido() {
  return (
    <div className="container-main">
      <div className="box">
        <div>
          <img
            src={pictureCadastro}
            alt="cadastro-cncluido"
            className="pic-container"
          />
        </div>
        <div className="link-container">
          <p className="text-cadastro">
            <b>Cadastro efetuado com sucesso!</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CadastroConcluido;
