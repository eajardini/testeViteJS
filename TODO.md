Sites
https://github.com/js-cookie/js-cookie

Como subir imagem nginx e apontar para a pasta /dist
https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/


docker run -it --rm -d -p 9090:80 --name web -v /opt/progs/golang/svelte/3-tercfeiro/testevite/dist:/usr/share/nginx/html nginx