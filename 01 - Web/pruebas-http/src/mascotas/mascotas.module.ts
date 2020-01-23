import {Module} from "@nestjs/common";
import {UsuarioModule} from "../usuario/usuario.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MascotasEntity} from "./mascotas.entity";

@Module({
    imports: [
        TypeOrmModule
            .forFeature([
                    MascotasEntity,

        ],
            'default',
            )
    ],
})
export class MascotasModule{

}