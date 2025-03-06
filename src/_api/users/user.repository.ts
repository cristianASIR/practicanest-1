import { EntityRepository, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@EntityRepository(User) // Ya no hace falta ponerlo
export class UserRepository extends Repository<User> {
    findByUsername(nombre: string): Promise<User | null> {
        return this.findOne({ where: { nombre } });
    }
}