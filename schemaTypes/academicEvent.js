import {defineField, defineType} from 'sanity'

export const academicEvent = defineType({
  name: 'academicEvent',
  title: 'Evento Acadêmico',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Ano',
      type: 'string',
      description: 'Ex: 2023',
    }),
    defineField({
      name: 'month',
      title: 'Mês',
      type: 'number',
      description: 'Mês do evento (opcional)',
      options: {
        list: [
          {title: 'Janeiro', value: 1},
          {title: 'Fevereiro', value: 2},
          {title: 'Março', value: 3},
          {title: 'Abril', value: 4},
          {title: 'Maio', value: 5},
          {title: 'Junho', value: 6},
          {title: 'Julho', value: 7},
          {title: 'Agosto', value: 8},
          {title: 'Setembro', value: 9},
          {title: 'Outubro', value: 10},
          {title: 'Novembro', value: 11},
          {title: 'Dezembro', value: 12},
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Título do evento',
      type: 'string',
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
      name: 'shortDescription',
      title: 'Descrição Curta',
      type: 'text',
      description: 'Texto curto para aparecer no cartão da Timeline',
    }),
    defineField({
      name: 'eventImage',
      title: 'Imagem do Evento',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'altText',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Descrição da imagem para acessibilidade',
        }),
      ],
    }),
    defineField({
      name: 'fullDescription',
      title: 'Descrição Completa',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Texto completo com formatação PortableText para a página de detalhes',
    }),
    defineField({
      name: 'pdfFile',
      title: 'Arquivo PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
})
