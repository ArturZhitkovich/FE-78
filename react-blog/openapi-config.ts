import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // откуда брать описание API (тот же JSON, по которому строится Swagger)
  schemaFile: 'https://studapi.teachmeskills.by/api/schema/?format=json',

  // наш пустой createApi, в который будут добавлены эндпоинты
  apiFile: './src/store/api/baseApi.ts',
  apiImport: 'baseApi',

   // куда положить результат
  outputFile: './src/store/api/blogApi.generated.ts',
  exportName: 'blogApi',
  
  // сгенерировать хуки useXxxQuery / useXxxMutation
  hooks: true,
  // проставить providesTags / invalidatesTags по разделам Swagger
  tag: true,

  // берём только нужное: посты, группы и логин
  filterEndpoints: [/^blog/, /^authJwt/],
}

export default config;