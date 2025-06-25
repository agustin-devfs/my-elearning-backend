import type { Schema, Struct } from '@strapi/strapi';

export interface MisSesionesSesiones extends Struct.ComponentSchema {
  collectionName: 'components_mis_sesiones_sesiones';
  info: {
    displayName: 'Sesiones';
    icon: 'alien';
  };
  attributes: {
    descripcion: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'mis-sesiones.sesiones': MisSesionesSesiones;
    }
  }
}
