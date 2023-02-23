'use client';
import Link from "next/link";
import { AuthBox, AuthBoxContainer, AuthBoxHeader, AuthForm, InputGroup, Input, BtnContainer, Button, BottomInfo, Line} from "../../resources/components/auth-components";
import { MdOutlineAlternateEmail, MdPersonOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { ChangeEvent, useState } from "react";

export default function Register() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:3333/users", {
      method: "POST",
      body: JSON.stringify({name, email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json()

    console.log(data)
  };

    return(
        <AuthBoxContainer>
      <AuthBox>
        <AuthBoxHeader>
          <span>Insira seus dados para se juntar à comunidade Adágio </span>
        </AuthBoxHeader>

        <AuthForm>
        <InputGroup>
            <Input
              name="name"
              id="name"
              placeholder="Nome"
              type="text"
              minLength={6}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <MdPersonOutline />
          </InputGroup>
          <InputGroup>
            <Input
              name="email"
              id="email"
              placeholder="seu e-mail"
              type="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <MdOutlineAlternateEmail />
          </InputGroup>
          <InputGroup>
            <Input
              name="password"
              id="password"
              placeholder="senha"
              minLength={8}
              type="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <RiLockPasswordLine />
          </InputGroup>
          <BtnContainer>
            <Button onClick={(e) => submit()}>Criar Conta</Button>
          </BtnContainer>
        </AuthForm>
      </AuthBox>

      <BottomInfo>
        <Line />
        <span>
          Já tem uma conta? <Link href={"/auth/login"}>Entre agora</Link>
        </span>
      </BottomInfo>
    </AuthBoxContainer>
  );
}