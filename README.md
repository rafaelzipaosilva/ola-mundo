# Figma

https://www.figma.com/file/AncF2JgEqX0TtRlU26HiYR/Ol%C3%A1%2C-Mundo!---Projeto-React%3A-router-(Copy)?type=design&node-id=38-716&mode=design&t=Cg0Ghs4z0BH7uQlP-0

# Instalar e utilizar o React Router 6
- Instalar a extenção utilizando o comando:
    npm install react-router-dom@6

- Utilizar os componentes:
<BrowserRouter> // Para iniciar o browser
    <Routes> // Pada destacar as rotas
        //Route, pat, element para destacar quais os caminhos de cada "página"
        <Route path="/" element={<Inicio />}/>
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
</BrowserRouter>


# Rotas aninhadas

    Na rota "/", a estrutura a ser renderizada é:
    
    <PaginaPadrão>
    <Inicio />
    </PaginaPadrão>

    Na rota "/sobremim", a estrutura a ser renderizada é:
    
    <PaginaPadrão>
    <SobreMim />
    </PaginaPadrão>