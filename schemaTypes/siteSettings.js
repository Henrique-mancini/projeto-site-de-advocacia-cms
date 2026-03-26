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
  ],
})
