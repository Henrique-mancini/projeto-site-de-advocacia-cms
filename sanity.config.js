import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Tipos singleton (apenas um documento permitido)
const singletonTypes = new Set(['about', 'siteSettings', 'home'])

// Ações permitidas para singletons (sem "create" ou "delete")
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'Portfólio Maria Eduarda Bressan',

  projectId: '25vcwkla',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Conteúdo')
          .items([
            // Página Inicial como singleton
            S.listItem()
              .title('Página Inicial')
              .id('home')
              .child(
                S.document()
                  .schemaType('home')
                  .documentId('home')
              ),
            S.divider(),
            // Configurações do Site como singleton
            S.listItem()
              .title('Configurações do Site')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Sobre Mim como singleton (item fixo, sem botão "+")
            S.listItem()
              .title('Sobre Mim')
              .id('about')
              .child(
                S.document()
                  .schemaType('about')
                  .documentId('about')
              ),
            S.divider(),
            // Artigos mantém o comportamento padrão de lista
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Esconde singletons do menu "Criar novo documento"
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Restringe ações em singletons (sem criar/deletar)
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})

