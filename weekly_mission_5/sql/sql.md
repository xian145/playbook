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

Para insertar informacion en la tabla que creamos utilizamos el comando "insert into" seguido de la tabla que queremos insertar la infomracion seguido de un parentesis en el que ponemos las columnas en las que insertamos, posteriormente "value" y un nuevo parentesis con los valores a insertar:

![image](https://user-images.githubusercontent.com/70303807/166801414-588239f0-ad99-481c-a046-4e9ea2b1504c.png)

Con el comando "select * from" seguido del nombre de la tabla, obtenemos la informacion de dicha tabla

![image](https://user-images.githubusercontent.com/70303807/166801900-8ae80de4-1cd8-44d9-8aca-e0c7bff50574.png)

Con el comando "select e."parte_de_la_tabla" from explorers e;" podemos seleccionar ver solo una parte de la tabla, en el ejemplo podemos ver utilizandu e.username y e.id, parecido a los metodos que utilizamos en los objetos.

![image](https://user-images.githubusercontent.com/70303807/166802071-07c45aa1-83d4-4347-9617-b64ca4c5f4b3.png)

Con el comando "update 'tabla' e set 'elemento_de_tabla' = "'Actualizacion'" where e.id = 1;" podemos actualizar cierta parte de la tabla solamente, en este caso estamos modificando el username de un explorer con id=1.

![image](https://user-images.githubusercontent.com/70303807/166802989-26bbb855-fa14-4eb7-b31b-a289a8a642a0.png)

Para eliminar un renglon de la tabla utilizamos "delete from 'tabla' e where e.id = 1;" el cual eliminara los que haya en en el id=1

![image](https://user-images.githubusercontent.com/70303807/166803262-bc7aff44-e7c5-4fd9-87d8-e23a31501d02.png)

Si bien podemos hacer todo esto desde la consola, es recomendable utiliar un editor de SQL para realizar todas estas operaciones, tal como  <a href="https://www.mysql.com/downloads/" target="MySQL">
