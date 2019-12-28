echo "### Dropping leadsales"
docker exec -it mariadb.local.suntech.com /bin/sh -c "mysql -uroot -psuntech -hlocalhost -e 'DROP DATABASE suntech'"
echo "### Creating leadsales"
docker exec -it mariadb.local.suntech.com /bin/sh -c "mysql -uroot -psuntech -hlocalhost -e 'CREATE DATABASE suntech'"
echo "### RollingBack"
docker exec -it api.local.suntech.com knex migrate:rollback --all
echo "### Migrating"
docker exec -it api.local.suntech.com knex migrate:latest
echo "### Seeding"
docker exec -it api.local.suntech.com yarn seedDb