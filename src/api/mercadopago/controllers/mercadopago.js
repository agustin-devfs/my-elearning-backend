// path: /src/api/mercadopago/controllers/mercadopago.js

'use strict';
const mercadopago = require('mercadopago');

module.exports = {
  async createPreference(ctx) {
    mercadopago.configure({ access_token: process.env.MP_ACCESS_TOKEN });

    const { scheduleData } = ctx.request.body;
    const preference = {
      items: [{ title: 'Reserva de evento', quantity: 1, unit_price: 1 }],
      back_urls: {
        success: `${process.env.FRONTEND_URL}/booking?orderId=`,  // completamos después
        failure: `${process.env.FRONTEND_URL}/booking?status=failure`,
        pending: `${process.env.FRONTEND_URL}/booking?status=pending`
      },
      auto_return: 'approved',
      external_reference: JSON.stringify({ scheduleData })
    };

    const response = await mercadopago.preferences.create(preference);
    // guardamos en DB Strapi
    const booking = await strapi.db
      .query('api::booking.booking')
      .create({ data: {
        mp_preference_id: response.body.id,
        status: 'pending',
        schedule_data: scheduleData
      }});
    // devolvemos init_point y el id interno
    return { init_point: response.body.init_point, orderId: booking.id };
  },

  async webhook(ctx) {
    const { body } = ctx.request;            // objeto webhook de MP
    const prefId = body.preference.id;
    const collectionStatus = body.collection_status;

    // buscamos la orden
    const booking = await strapi.db.query('api::booking.booking').findOne({
      where: { mp_preference_id: prefId }
    });
    if (!booking) return ctx.badRequest();

    // actualizamos estado
    await strapi.db
      .query('api::booking.booking')
      .update({
        where: { id: booking.id },
        data: { status: collectionStatus }
      });
    ctx.send('OK');
  },

  async status(ctx) {
    const { orderId } = ctx.query;
    const booking = await strapi.db
      .query('api::booking.booking')
      .findOne({ where: { id: orderId }});
    return { status: booking.status };
  }
};
