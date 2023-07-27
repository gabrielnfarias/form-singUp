import "./style.css";
import React, { useState } from "react";
import picture from "./../../assets/background.jpg";
import CadastroConcluido from "./../SignUp/cadastroConcluido";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [isCadastroConcluido, setIsCadastroConcluido] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setShowWarning(true);
      console.log("Por favor, preencha todos os campos.");
    } else {
      setShowWarning(false);
      console.log("Formulário enviado com sucesso!");

      setIsCadastroConcluido(true);
    }
  };

  return (
    <div className="container-main">
      <div className="box">
        {!isCadastroConcluido ? (
          <form onSubmit={handleSubmit}>
            <h2 className="tittle">Cadastre-se</h2>
            <input type="text" placeholder="Nome" />
            <input
              type="text"
              placeholder="E-mail"
              onChange={handleEmailChange}
              value={email}
            />
            <div className="input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Digite a sua senha"
              />
              <span
                id="visi"
                className={`show-password-btn material-symbols-outlined ${
                  passwordVisible ? "visible" : ""
                }`}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "visibility" : "visibility_off"}
              </span>
            </div>
            {showWarning && (
              <p style={{ color: "red" }}>
                Por favor, preencha todos os campos.
              </p>
            )}
            <button type="submit" className="singUp-btn">
              Cadastrar
            </button>
            <button type="submit" className="cancel-btn">
              Cancelar
            </button>
          </form>
        ) : (
          <CadastroConcluido />
        )}

        {/* Movido para dentro do bloco de renderização condicional */}
        {!isCadastroConcluido && (
          <div className="link-container">
            <p>Já tem Cadastro? Clique Aqui.</p>
          </div>
        )}
      </div>
      <img src={picture} alt="" />
    </div>
  );
}

export default SignUp;
