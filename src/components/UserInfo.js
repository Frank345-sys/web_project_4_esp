import { Api } from "./Api.js";

export class UserInfo {
  constructor() {}

  async getUserInfo() {
    try {
      const getProfile = new Api({
        baseUrl: "users/me",
        method: "GET",
        body: null,
        headers: {
          authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
          "Content-Type": "application/json",
        },
      });

      const result = await getProfile.profile();

      // Verifica si la solicitud fue exitosa
      if (result && result.avatar && result.name && result.about) {
        return result;
      } else {
        throw new Error("Error al obtener la información del usuario");
      }
    } catch (error) {
      throw new Error("Error en la solicitud : " + error.message);
    }
  }

  async setUserInfo(name, occupation) {
    try {
      const setProfile = new Api({
        baseUrl: "users/me",
        method: "PATCH",
        body: JSON.stringify({
          name: name,
          about: occupation,
        }),
        headers: {
          authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
          "Content-Type": "application/json",
        },
      });

      const result = await setProfile.profile();

      // Verifica si la solicitud fue exitosa
      if (result && result.name && result.about) {
        return result;
      } else {
        throw new Error("Error al actualizar la información del usuario");
      }
    } catch (error) {
      throw new Error("Error en la solicitud : " + error.message);
    }
  }

  async setUserPhotoInfo(link) {
    try {
      const setPhotoProfile = new Api({
        baseUrl: `users/me/avatar`,
        method: "PATCH",
        body: JSON.stringify({
          avatar: link,
        }),
        headers: {
          authorization: "28d1f77b-3605-449f-bf16-20a5216f8fdb",
          "Content-Type": "application/json",
        },
      });

      const result = await setPhotoProfile.profile();

      // Verifica si la solicitud fue exitosa
      if (result && result.avatar) {
        return result.avatar;
      } else {
        throw new Error("Error al actualizar la foto del usuario");
      }
    } catch (error) {
      throw new Error("Error en la solicitud : " + error.message);
    }
  }
}
