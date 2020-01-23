import {Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('bdd_mascotas')
export class MascotasEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Index('nombre_mascotas')
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        name: 'bdd_nombre',
    })
    nombre: string;

    @Column({
        type: 'date',
        nullable: false,
        name: 'bdd_fec_nacimiento',
    })
    fechaNacimiento: string;

    @ManyToMany(
        type => UsuarioEntity, //Entidad
        usuario => usuario.mascotas,
    )
    usuario: UsuarioEntity;
}