import { User } from "src/_api/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

//Esta línea se añade para agregar la entidad a la base de datos
@Entity()
export class Posts {
    @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
        id: number;
        @Column()
        titulo: string;
        @Column()
        contenido: string;
        @ManyToOne(() => User, (user) => user.posts, {onDelete: 'CASCADE'}) 
        user: User;
}
