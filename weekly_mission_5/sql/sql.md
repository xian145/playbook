##Experiencia con el tutorial de SQL

Al inicio me senti perido ya que nunca habia utilizado SQL, no sabia que era lo que se suponia que debia de ver, pero nada que internet no me ayude a reoslver, tras buscanr un poco en internet, encontre que en windows se "crea" una nueva terminal de SQL, la cual nos permite amnejar y crear base de datos

![image](https://user-images.githubusercontent.com/70303807/166755365-21a0e1b1-4a2a-4fb5-9ffd-399b69addfde.png)

Al incializar nos pide cierta informacion como el tipo de servidor, alguna base de datos, el puerto con el que se comunicara, el usuario (que creo haberme saltado ese paso puesto que nunca cree uno o al menos no de manera intencional) y por ultimo la contraseña para dicho usuario (esa si estuve conciente de haberla creado)

![image](https://user-images.githubusercontent.com/70303807/166760863-997f2f76-e898-4003-9aef-10bb1b21ee2c.png)

Tras esto, es posible consultar la lista de base de datos disponibles con dicho usuario y contraseña utilizando \l (es importante notar que no es / si no\), dado que es la primera vez utilizando SQL, es obvio que no obtendria una lista de base de datos, por lo que cree una nueva base de datos con el comando " create database" seguido del nombre de la base de datos finalizando con ";", al hacer esto y utilizar el comando con el que buscanmos las base de datos creadas obtuve lo siguiente:

![image](https://user-images.githubusercontent.com/70303807/166773887-87c9ace8-c715-4ff4-ba9a-b284df047bad.png)

Asi como en la terminal utilizamos "cd" para cambiar de directorio, aqui podemos utilizar "\c" seguido de la base de datos para seleccionarla:

![image](https://user-images.githubusercontent.com/70303807/166786605-afe35ba0-0a51-46f6-9708-8b56c1f0e9d1.png)

utilizamos el comando \dt para ver las tablas disponibles pero al no tener una nos despliega el siguiente mensaje:

![image](https://user-images.githubusercontent.com/70303807/166790440-af968a06-ebdc-400b-8811-401395be5365.png)

Para cambiar eso, utilizamos el comando "CREATE TABLE" seguido del nombre de la tabla junto con la informacion que queremos que contenga, tal como aqui:

![image](https://user-images.githubusercontent.com/70303807/166795214-533a8c43-5a84-416a-9c4f-022668ec1f94.png)
