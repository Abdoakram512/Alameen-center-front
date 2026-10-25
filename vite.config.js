import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Alameen-center-front/' : '/',
  plugins: [tailwindcss()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        dashboard: resolve(import.meta.dirname, 'pages/dashboard.html'),
        certificates: resolve(import.meta.dirname, 'pages/certificates.html'),
        certificate: resolve(import.meta.dirname, 'pages/certificate.html'),
        grades: resolve(import.meta.dirname, 'pages/grades.html'),
        courses: resolve(import.meta.dirname, 'pages/course-details.html'),
        lesson: resolve(import.meta.dirname, 'pages/lesson.html'),
        assignment: resolve(import.meta.dirname, 'pages/assignment.html'),
        result: resolve(import.meta.dirname, 'pages/result.html'),
        login: resolve(import.meta.dirname, 'pages/login.html'),
        register: resolve(import.meta.dirname, 'pages/register.html'),
        reviews: resolve(import.meta.dirname, 'pages/reviews.html'),
        contact: resolve(import.meta.dirname, 'pages/contact.html'),
        catalog: resolve(import.meta.dirname, 'pages/courses.html'),
        profile: resolve(import.meta.dirname, 'pages/profile.html'),
      },
    },
  },
})
