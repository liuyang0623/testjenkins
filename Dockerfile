FROM nginx

RUN echo 'Asia/Shanghai' >/etc/timezone
RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html
# RUN rm /usr/share/nginx/html/index.html
COPY build/ /usr/share/nginx/html
# COPY conf/default.conf /etc/nginx/conf.d
# COPY conf/nginx.conf /etc/nginx