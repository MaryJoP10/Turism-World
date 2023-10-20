import React, { useState } from 'react';
import Upper from '../images/upper.jpg';
import styled from 'styled-components';
import '../styles/signin.css';


const Signin = () => {
    const [signIn, toggle] = React.useState(true);
    return (
        <>
            <div className="header_help">
                <img src={Upper} alt="Upper" />
                <h1 className="h1 header_text">¡Bienvenido!</h1>
            </div>
            <div className="signin-page">
                <Container>
                    <SignUpContainer signinIn={signIn}>
                        <Form>
                            <Title>Crea una cuenta</Title>
                            <Input type='text' placeholder='Usuario' required/>
                            <Input type='email' placeholder='Email' required/>
                            <Input type='password' placeholder='Contraseña' required/>
                            <Button>Registrarse</Button>
                        </Form>
                    </SignUpContainer>

                    <SignInContainer signinIn={signIn}>
                        <Form>
                            <Title>Inicia sesión</Title>
                            <Input type='email' placeholder='Email' required/>
                            <Input type='password' placeholder='Contraseña' required/>
                            <Anchor href='#'>¿Olvidaste la contraseña?</Anchor>
                            <Button>Iniciar sesión</Button>
                        </Form>
                    </SignInContainer>

                    <OverlayContainer signinIn={signIn}>
                        <Overlay signinIn={signIn}>

                            <LeftOverlayPanel signinIn={signIn}>
                                <Title>¡Te echábamos de menos!</Title>
                                <Paragraph>
                                    Inicia sesión y comparte tus experiencias con otros viajeros
                                </Paragraph>
                                <GhostButton onClick={() => toggle(true)}>
                                    Inicia sesión
                                </GhostButton>
                            </LeftOverlayPanel>

                            <RightOverlayPanel signinIn={signIn}>
                                <Title>¿Aún sin cuenta?</Title>
                                <Paragraph>
                                    Crea una cuenta y únete a esta maravillosa comunidad de viajeros
                                </Paragraph>
                                <GhostButton onClick={() => toggle(false)}>
                                    Registrate
                                </GhostButton>
                            </RightOverlayPanel>

                        </Overlay>
                    </OverlayContainer>
                </Container>
            </div>
        </>
    );
};

export default Signin;

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 678px;
max-width: 100%;
min-height: 400px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
        : null}
 `;


export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;

export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;

export const Title = styled.h1`
    font-family: 'Times New Roman', Times, serif;
 font-weight: bold;
 margin: 0;
 color: #003E3E;
 line-height: 40px;
 `;

export const Input = styled.input`
 background-color: transparent;
 color: #000 !important;
 border: none;
 border-bottom: 2px solid #003E3E;
 padding: 0px 15px;
 margin: 20px 0px 20px 0px;
 width: 100%;
 `;


export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #003E3E;
    background-color: #003E3E;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:hover{
        border-color: #fff;
        transition: all 0.5s;
        box-shadow: 0px 7px 5px 0px rgb(61,61,61,0.5);
    }
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #003E3E;
 color: #003E3E;
 `;

export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 &:hover{
    letter-spacing: 2px;
    transition: 0.5s;
    color: #003E3E;
 }
 `;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
        props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #5EC7FE;
background: -webkit-linear-gradient(to right, #5EC7FE, #BDECFE);
background: linear-gradient(to right, #5EC7FE, #BDECFE);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

export const Paragraph = styled.p`
    color: black;
    font-family: Arial, Helvetica, sans-serif;
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px
 `;