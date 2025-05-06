Paso a paso para la instalacion del bun para la pagina

dependiendo cual sistema operativo tengas debes usar los que te dejo aqui abajo:

Linux:
curl -fsSL https://bun.sh/install | bash

Windowns:
En Windows, se recomienda usar WSL (https://learn.microsoft.com/en-us/windows/wsl/) o instalar Git Bash para que funcione correctamente el comando curl.

luego de instalar el bun debes cerrar la terminal para que funcione correctamente.

usa cd para ir a la carpeta donde esta tu proyecto.
ejem cd Documentos/Tienda_artesania

cuando este en la carpeta de tu proyecto debe poner el siguiente comando.
bun install

si no tenes el package.json debes usar el comando.
bun init

luego cierra la terminal y usa el comando
bun run dev
obviamenta en la carpeta de tu proyecto
