/*
Este componente personaliza la pantalla de login utilizando la siguiente paleta de colores:
- Fondo principal: #0D1440
- Inputs de fondo: #AD6CD9
- Bordes de inputs: #7B51A6
- Contenedor de formulario: #C2D4C8
- Botón de inicio: #ECC165

*/

import React from 'react';
import { Main } from '@strapi/design-system/Main';
import { Box } from '@strapi/design-system/Box';

const CustomLogin = () => {
  return (
    <Main style={{ 
      backgroundColor: '#0D1440', 
      minHeight: '100vh', 
      fontFamily: 'Josefin Sans, sans-serif' 
    }}>
      <Box style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ 
          backgroundColor: '#C2D4C8', 
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
          width: '100%',
          maxWidth: '400px'
        }}>
          <h1 style={{ color: '#0D1440', textAlign: 'center' }}>Bienvenido</h1>
          <p style={{ color: '#0D1440', textAlign: 'center', marginBottom: '1.5rem' }}>
            Ingresa tus credenciales
          </p>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #7B51A6',
                  borderRadius: '4px',
                  backgroundColor: '#AD6CD9',
                  color: '#0D1440',
                  fontFamily: 'Josefin Sans, sans-serif'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <input 
                type="password" 
                placeholder="Contraseña" 
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #7B51A6',
                  borderRadius: '4px',
                  backgroundColor: '#AD6CD9',
                  color: '#0D1440',
                  fontFamily: 'Josefin Sans, sans-serif'
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button 
                type="submit" 
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#ECC165',
                  color: '#0D1440',
                  fontFamily: 'Josefin Sans, sans-serif',
                  cursor: 'pointer'
                }}
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </Box>
    </Main>
  );
};

export default CustomLogin;
