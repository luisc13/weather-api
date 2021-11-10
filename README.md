# weather-api

Api para a utilização do software my-weather Link: https://github.com/luisc13/my-weather. Para rodar em desenvolvimento utilize o comando yarn para instalar as dependências.
Em seguida configure o arquivo .env assim como descrito no .env.example. Link para pegar sua chave para consulta na Api Open Weather: https://openweathermap.org/api.
Certifique - se de ter o banco de dados postgrees para poder utilizar o Prisma configure a variavel .env assim como descrito no .env.example (Link para documentação do prisma: https://www.prisma.io)
Em seguida utilize o comando yarn prisma migrate dev para criar as migrates através do prisma e então poderá utilizar o sistema em desenvolvimento com o comando Yarn dev
