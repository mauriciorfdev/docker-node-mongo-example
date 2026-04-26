FROM node:18
#Based on another image

RUN mkdir -p /home/app
# app source code folder
# path within the same container, it doesn't reference your physical machine

COPY . /home/app
# copy files from host path -> container path

EXPOSE 3000
#expose ports (host pc or another container can connect to this container)

CMD ["node", "/home/app/server.js"]
# default command that will execute when...
#...a container is started from an image