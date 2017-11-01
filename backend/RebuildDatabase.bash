echo Enter your mySQL password:
read pass
{
mysql -u root -p$pass -e "DROP DATABASE IF EXISTS NewtonsEye;"
mysql -u root -p$pass -e "CREATE DATABASE NewtonsEye;"
mysql -u root -p$pass -e "use NewtonsEye;CREATE TABLE users (name varchar(128), email varchar(128), phone varchar(16), address varchar(255));CREATE TABLE threats (location varchar(255), type varchar(255), severity INTEGER, description varchar(255), time DATE);"
} &> /dev/null
echo done