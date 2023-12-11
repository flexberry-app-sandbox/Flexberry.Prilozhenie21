docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie2/app ../..
