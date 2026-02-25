## Práctica de SASS: Creación de componentes con metodología BEM

## Objetivo

Crear un sistema de componentes reutilizables utilizando SASS con sintaxis .sass, implementando las principales características del preprocesador y la metodología BEM.

## Tiempo estimado
2 horas

## Requisitos previos
Conocimientos básicos de HTML y CSS

Tener instalado SASS en el equipo (npm install -g sass)

## Descripción (lo que se tiene que hacer)

Deberás crear una página que muestre dos componentes: una tarjeta de perfil (profile card) y un botón con diferentes variantes, utilizando SASS con sintaxis indentada (.sass).

## Tareas a realizar
1. Configuración inicial (10 minutos)
Crear la estructura de archivos:

index.html
styles/
  main.sass

Configurar el comando para compilar SASS: sass styles/main.sass:styles/main.css --w

## 2. Variables y configuración base (15 minutos)

En main.sass:

Definir variables para:

Colores primarios, secundarios y de texto

Tamaños de fuente

Espaciados (márgenes, paddings)

Border radius

Establecer estilos base para la página (reset básico, fuentes, colores)

3. Crear componentes con BEM (60 minutos)
Crear una clase base .btn con estilos comunes

Implementar modificadores para:

Colores (primario, secundario, éxito, peligro)

Tamaños (pequeño, mediano, grande)

Estados (deshabilitado)

Usar anidamiento para los estados :hover y :focus

Crear un mixin para el estilo base del botón (sin parámetros)

Crear un mixin para los colores (con parámetros)

Tarjeta de perfil (en _cards.sass)
Crear un bloque .card con estilos base

Definir elementos:

card__image

card__content

card__title

card__text

card__footer

Implementar modificadores para variantes de la tarjeta

Usar anidamiento para la estructura

Aplicar @extend para clases de utilidad compartidas

4. Implementación en HTML (20 minutos)
Crear la estructura HTML con las clases BEM

Incluir al menos:

4 botones con diferentes variantes

2 tarjetas de perfil con diferentes estilos

## 5. Compilación y verificación (15 minutos) Compilar el código SASS

## Verificar que los estilos se apliquen correctamente

## Ajustar detalles de diseño si es necesario

#Para mañana