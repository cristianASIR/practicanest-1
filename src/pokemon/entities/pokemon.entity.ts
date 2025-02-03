import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//Esta línea se añade para agregar la entidad a la base de datos
@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
        id: number;
        @Column({ type: 'varchar', length: 50 })
        nombre: string;
        @Column({ type: 'varchar', length: 15 })
        tipo: string;
        @Column()
        password: string;
        @Column({ default: true })
        activo: boolean;
        @CreateDateColumn() // Fecha de creación automática
        fechaCreacion: Date;
        @UpdateDateColumn() // Fecha de actualización automática
        fechaActualizacion: Date;
}
