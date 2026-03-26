import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'baseFont',
      title: 'Fonte Base (Títulos)',
      type: 'string',
      description:
        'Digite o nome exato da fonte conforme o Google Fonts (ex: "Playfair Display", "Lora", "Merriweather"). A fonte será aplicada automaticamente nos títulos do site.',
    }),
    defineField({
      name: 'bodyFont',
      title: 'Fonte do Corpo do Texto',
      type: 'string',
      description:
        'Digite o nome exato da fonte conforme o Google Fonts (ex: "Lato", "Open Sans", "Roboto"). A fonte será aplicada nos parágrafos e textos do corpo do site.',
    }),
  ],
})
