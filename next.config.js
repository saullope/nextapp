/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_USER: 'Andy', 
    DB_PASSWORD: 'Tde4529!', 
    DB_SERVER: "proyectoiso.database.windows.net", 
    DB_PORT: 1433, 
    DB_DATABASE: 'proyecto'
  },
}

module.exports = nextConfig
