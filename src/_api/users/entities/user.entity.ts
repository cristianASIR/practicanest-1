import { Posts } from "src/_api/posts/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

//Esta línea se añade para agregar la entidad a la base de datos
@Entity()
export class User {
    @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
    id: number;
    @Column()
    titulo: string;
    @Column()
    contenido: string;
    @OneToMany(() => Posts, (post) => post.user) // Fecha de actualización automática
    posts: Posts[];
}
