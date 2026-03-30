import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Página Inicial',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Texto de Introdução',
      type: 'text',
      description:
        'Texto de apresentação exibido na seção principal da página inicial. Suporta quebras de linha.',
      rows: 4,
    }),
  ],
})
