# Portfólio Jurídico - Sistema de Gestão de Conteúdo (CMS)

![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## Sobre o Projeto

Este é o ambiente de retaguarda (Back-end) do **Portfólio Jurídico**, desenvolvido sob medida para o portfólio de uma estudante de direito. Aqui geramos e administramos a base de conhecimento e conteúdo textual do site, por meio do **Sanity Studio**. 
Trata-se de um Headless CMS que fornece uma interface gráfica customizada para cadastro e edição de conteúdo, entregando tudo ao Front-end via uma API robusta e flexível.

## Tecnologias Utilizadas

- **[Sanity Studio](https://www.sanity.io/studio)** - Plataforma baseada em React para gestão de conteúdo estruturado colaborativo.

## Estrutura de Dados (Schemas)

A estrutura do banco foi modelada de forma modular. Os seguintes documentos (schemas) foram implementados e estão disponíveis para edição no Studio:

1. **Artigo (`article`)**
   - Título, Slug (URL amigável), Imagem de capa e Autor.
   - Suporte a **Rich Text** (Portable Text) para edição completa do corpo e formatação livre do texto.
   - Campo para upload e disponibilização de arquivos **PDF** atrelados à respectiva postagem.

2. **Sobre Mim (`aboutMe`)**
   - Dados descritivos gerais, missão, perfil e referências, centralizados para controle absoluto da página *Sobre Mim*.

3. **Evento Acadêmico (`academicEvent`)**
   - Registro cronológico para a timeline (Evolução Acadêmica).
   - Título do curso/evento, instituição, ano/período, descrição e slug, organizando o currículo de forma sistemática.

---

# Legal Portfolio - Content Management System (CMS)

![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## About the Project

This is the back-end environment for the **Legal Portfolio**, custom-developed for a law student's portfolio. Here we generate and manage the knowledge base and textual content of the site using **Sanity Studio**. 
It is a Headless CMS that provides a customized graphical interface for content registration and editing, delivering everything to the Front-end via a robust and flexible API.

## Technologies Used

- **[Sanity Studio](https://www.sanity.io/studio)** - React-based platform for collaborative structured content management.

## Data Structure (Schemas)

The database structure was modeled in a modular way. The following documents (schemas) were implemented and are available for editing in the Studio:

1. **Article (`article`)**
   - Title, Slug (friendly URL), Cover image, and Author.
   - Support for **Rich Text** (Portable Text) for full body editing and free text formatting.
   - Field for uploading and making available **PDF** files linked to the respective post.

2. **About Me (`aboutMe`)**
   - General descriptive data, mission, profile, and references, centralized for absolute control over the *About Me* page.

3. **Academic Event (`academicEvent`)**
   - Chronological record for the timeline (Academic Evolution).
   - Course/event title, institution, year/period, description, and slug, organizing the curriculum systematically.
