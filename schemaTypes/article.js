import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Artigo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    }),
    defineField({
      name: 'summary',
      title: 'Resumo',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'body',
      title: 'Corpo do Texto',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
    },
  },
})
